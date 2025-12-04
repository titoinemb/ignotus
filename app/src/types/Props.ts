export type Props = {
  json: any;
  lang: string;
};

export type SubTitleProps = {
  videoId: string;
  srt?: string | null;
  srtUrl?: string | null;
  offset?: number;
  className?: string;
};