export type ItemResponse = {
  id: string | number;
  data: any;
};

export type Cue = {
  start: number;
  end: number;
  text: string
};

export type AnyObj = Record<string, unknown>;