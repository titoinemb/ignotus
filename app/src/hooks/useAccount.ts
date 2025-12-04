import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AccountState} from "@types";
import { session } from '../functions';

export const useAccount = (json: any) => {
  const [state, setState] = useState<AccountState>({
    idsession: null,
    loading: true,
    error: null,
    sessionsHtml: [],
    storageId: '',
    premiumStatut: '',
    listWishList: [],
    listwatchList: [],
    itemsData: [],
    location: useLocation(),
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;

    const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));
    const maxAttempts = 3;

    const run = async () => {
      const rawSession = localStorage.getItem("session");
      const rawId = localStorage.getItem("username");
      if (!rawSession || !rawId) return;

      for (let attempt = 1; attempt <= maxAttempts && !cancelled; attempt++) {
        try {
          const timeoutMs = 3000;
          const sessionPromise = session(rawSession, rawId);
          const sessionData = await Promise.race([
            sessionPromise,
            new Promise<number>((_, rej) => setTimeout(() => rej(new Error("timeout")), timeoutMs))
          ]) as number;

          if (sessionData === 1) {
            if (!cancelled) {
              setState(s => ({ ...s, idsession: rawSession }));
            }
            return;
          }

          if (attempt < maxAttempts) {
            await sleep(500 * 2 ** (attempt - 1));
            continue;
          }

          if (!cancelled) {
            localStorage.removeItem("session");
            localStorage.removeItem("username");
            window.location.href = "";
          }
          return;

        } catch {
          if (attempt === maxAttempts) {
            if (!cancelled) {
              localStorage.removeItem("session");
              localStorage.removeItem("username");
              window.location.href = "";
            }
            return;
          }
          await sleep(500 * 2 ** (attempt - 1));
        }
      }
    };

    run();

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/ping', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          return setState(s => ({ ...s, error: 0 }));
        }

        if (localStorage.getItem('session')) {
          const response2 = await fetch('http://localhost:8080/account/datas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              username: localStorage.getItem('username')!,
              session: localStorage.getItem('session')!
            }),
          });

          if (!response2.ok) {
            return setState(s => ({ ...s, error: 0 }));
          }

          const datarep2 = await response2.json();
          if (!datarep2 || datarep2.message !== "1") {
            return setState(s => ({ ...s, error: 0 }));
          }

          const raw = datarep2.datas.premium;
          const p = typeof raw === 'string' ? new Date(raw) : raw;
          const days = Math.ceil((+p - Date.now()) / 86400000);

          setState(s => ({
            ...s,
            sessionsHtml: datarep2.datas.session,
            storageId: localStorage.getItem('username')!,
            listWishList: datarep2.datas.wishlist,
            listwatchList: datarep2.datas.watchList,
            premiumStatut: days < 0 ? json.account.txt16 : json.account.txt17 + " " + days
          }));
        }

      } catch {
        setState(s => ({ ...s, error: 0 }));
      } finally {
        setState(s => ({ ...s, loading: false }));
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [json.account]);


  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!state.listWishList || state.listWishList.length === 0) {
        setState(s => ({ ...s, itemsData: [] }));
        return;
      }

      try {
        const results: any[] = [];

        for (const item of state.listWishList) {
          const res = await fetch('http://localhost:8080/item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ table: item.table, id: item.id }),
          });

          if (!res.ok) throw new Error();

          const json = await res.json();
          if (!json) throw new Error();

          results.push({ id: item.id, data: json });
        }

        if (mounted) {
          setState(s => ({ ...s, itemsData: results }));
        }

      } catch {
        if (mounted) {
          setState(s => ({ ...s, error: 0 }));
        }
      }
    })();

    return () => { mounted = false };
  }, [state.listWishList]);

  return state;
};