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
  error: boolean;
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
  error: boolean;
};

export type AccountState = {
  idsession: string | null;
  loading: boolean;
  error: boolean;
  sessionsHtml: any[];
  storageId: string;
  premiumStatut: string;
  listWishList: any[];
  listwatchList: any[];
  itemsData: ItemResponse[] | [];
  location: any;
};

export type ItemState = {
  loading: boolean;
  error: boolean;
  data: any | null;
  saisonsSelect: any[];
  castingsSelect: any[];
  wishlistOption: number;
  saisons: number;
  activeContent: string;
};

export type SearchSate = {
  loading: boolean;
  error: boolean;
  listBase: any[];
};

export type SettingsState = {
  loading: boolean;
  error: boolean;
  settingss: any,
  idSession: string;
};

export type WatchState = {
  loading: boolean;
  error: boolean;
  error404: boolean;
  videoUrl: string | null;
  adblockStatut: boolean;
  langDispo: any;
  settings: any;
  duration: number;
  currentTime: number;
  time: string;
  mySrt: string | null;
  totalTime: string;
  quality: string;
};