import {useLocation} from "react-router";

export const usePathname = (): string => {
  const {pathname} = useLocation();
  return pathname.slice(-1) === '/' ? pathname : pathname + '/';
};

export const usePathnameArray = (): string[] => {
  return urlToArray(useLocation().pathname);
};

export const urlToArray = (url: string): string[] => url.split('/').filter(x => x !== '');
export const arrayToUrl = (array: string[]): string => array.join('/');

export const generateGetFileUrl = (url: string): string => {
  const urlArr = urlToArray(url);
  const repository = urlArr.shift();
  return ['', repository, 'blob/master', ...urlArr].join('/');
};