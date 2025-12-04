import { useEffect, useState } from 'react';
import { HomeData, HomeState } from "@types";

export const useHome = () => {
  const [state, setState] = useState<HomeState>({
    loading: true,
    error: null,
    data: null,
    listAction: [],
    listAdventure: [],
    listCommedy: [],
    listAnim: [],
  });

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch('http://localhost:8080/home', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          setState({ ...state, error: 'Erreur lors de la récupération des données' });
          return;
        }

        let datarep: HomeData = await response.json();

        if (!datarep) {
          setState({ ...state, error: 'Aucune donnée reçue' });
          return;
        }

        setState({
          loading: false,
          error: null,
          data: datarep,
          listAction: datarep.data2,
          listAdventure: datarep.data4,
          listCommedy: datarep.data5,
          listAnim: datarep.data3,
        });
      } catch (error) {
        setState({ ...state, loading: false, error: 'Erreur de réseau' });
      };
    };

    fetchData();
  }, []);

  return state;
};