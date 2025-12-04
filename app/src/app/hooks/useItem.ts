'use client';
import { useEffect, useState } from 'react';
import { ItemState } from "@types";
import { useLocation } from 'react-router-dom';
import { findInTable } from "../functions";

export const useItem = () => {
  const [state, setState] = useState<ItemState>({
    loading: true,
    error: false,
    data: null,
    saisonsSelect: [],
    castingsSelect: [],
    wishlistOption: 1,
    saisons: 0,
    activeContent: "saisons",
  });
  const contentBtn = (where: string) => setState({ ...state, activeContent: where });
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => setState({ ...state, saisons: parseInt(event.target.value) });

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryParams: { [key: string]: string } = {};

  params.forEach((value, key) => queryParams[key] = value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/item', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ table: queryParams.t, id: queryParams.i }),
        });

        if (!response.ok) throw new Error('Failed to fetch item');

        const datarep = await response.json();

        if (!datarep) throw new Error('No data received');

        let wishlistOption = 1;

        if (localStorage.getItem('session')) {
          const response2 = await fetch('http://localhost:8080/account/datas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ username: localStorage.getItem('username'), session: localStorage.getItem('session') }),
          });

          if (!response2.ok) throw new Error('Failed to fetch account data');

          const datarep2 = await response2.json();

          if (!datarep2 || datarep2.message !== "1") throw new Error('Invalid account data');

          const wishlist = datarep2.datas.wishlist;

          if (findInTable(wishlist, { table: queryParams.t, id: queryParams.i })) {
            wishlistOption = 2;
          };
        };

        if (!datarep.data.saisons) {
          setState(prevState => ({ ...prevState, activeContent: "castings" }));
        };

        setState(prevState => ({
          ...prevState,
          data: datarep,
          castingsSelect: datarep.data.person,
          saisonsSelect: datarep.data.saisons,
          wishlistOption,
          loading: false
        }));
      } catch (error) {
        setState(prevState => ({ ...prevState, error: true, loading: false }));
      };
    };

    fetchData();
  }, [queryParams.i, queryParams.t]);

  return {
    ...state,
    contentBtn,
    handleChange,
    queryParams
  };
};