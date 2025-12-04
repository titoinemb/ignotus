import { Cue } from "../types";

export const parseSrt = (srt: string): Cue[] => {
  return (srt || '')
    .replace(/\r/g, '')
    .split('\n\n')
    .map(b => b.trim())
    .filter(Boolean)
    .map(block => {
      const lines = block.split('\n').map(l => l.trim());
      if (/^\d+$/.test(lines[0])) lines.shift();
      const time = lines.shift() || '';
      const m = time.match(/(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})\s*--?>\s*(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})/);
      const toSec = (t: string) => {
        const p = t.replace(',', '.').split(':');
        return +p[0]*3600 + +p[1]*60 + +parseFloat(p[2]);
      };
      return m ? { start: toSec(m[1]), end: toSec(m[2]), text: lines.join('\n') } : null;
    })
    .filter(Boolean) as Cue[];
};