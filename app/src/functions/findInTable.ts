import { AnyObj } from "../types";

export const findInTable = (table: AnyObj[], search: AnyObj): boolean => {
  if (!Array.isArray(table)) return false;
  if (!search || typeof search !== 'object') return false;

  return table.some(item =>
    Object.keys(search).every(key => item[key] === search[key])
  );
};