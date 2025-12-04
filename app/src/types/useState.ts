import { Cue, ItemResponse } from "@types";

export type HomeData = {
  data1: any;
  data2: any[];
  data3: any[];
  data4: any[];
  data5: any[];
};

export type HomeState = {
  loading: boolean;
  error: string | null;
  data: HomeData | null;
  listAction: any[];
  listAdventure: any[];
  listCommedy: any[];
  listAnim: any[];
};

export type SubtitlesState = {
  cues: Cue[];
  activeText: string | null;
  loading: boolean;
  error: string | null;
};

export type AccountState = {
  idsession: string | null;
  loading: boolean;
  error: 0 | null;
  sessionsHtml: any[];
  storageId: string;
  premiumStatut: string;
  listWishList: any[];
  listwatchList: any[];
  itemsData: ItemResponse[] | [];
  location: any;
};