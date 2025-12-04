import { useEffect, useState } from 'react';
import { SearchSate } from "@types";
import { useLocation } from 'react-router-dom';

export const useSearch = () => {
  const [state, setState] = useState<SearchSate>({
    loading: true,
    error: false,
    listBase: [],
  });

  let location = useLocation();
  
  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let queryParams: { [key: string]: string } = {};
    let typingTimer: NodeJS.Timeout;

    params.forEach((value, key) => {
      queryParams[key] = value;
    });

    var query: string;

    if (!queryParams.query) {
      const charCode = Math.floor(Math.random() * 26) + 97;
      query = String.fromCharCode(charCode);
    } else {
      query = queryParams.query;
    };

    const fetchData = async (query1: string) => {
      try {
        const response = await fetch('http://localhost:8080/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ search: query1 }),
        });

        if (!response.ok) {
          return setState(prevState => ({ ...prevState, error: true }));
        };

        const datarep = await response.json();

        if (!datarep) {
          return setState(prevState => ({ ...prevState, error: true }));
        };

        await setState(prevState => ({ ...prevState, listBase: datarep.data }));
      } catch (error) {
        setState(prevState => ({ ...prevState, error: true }));
      } finally {
        setState(prevState => ({ ...prevState, loading: false }));
      };
    };

    fetchData(query);

    function onUserTyping() {
      clearTimeout(typingTimer);

      typingTimer = setTimeout(() => {
        let inputElement = document.getElementById('searchQuery') as HTMLInputElement | null;

        if (inputElement) {
          let query2 = inputElement.value.trim();

          if (query2.length === 0) return;

          return fetchData(query2);
        };
      }, 1000);
    };

    setTimeout(() => {
      let inputElement = document.getElementById('searchQuery') as HTMLInputElement;

      if (inputElement) {
        return inputElement.addEventListener('input', onUserTyping);
      };
    }, 1000);

  }, [location.search]);

  return state;
};