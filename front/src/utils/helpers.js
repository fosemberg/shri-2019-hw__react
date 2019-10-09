import {useLocation} from "react-router";

export const usePathname = () => {
  const {pathname} = useLocation();
  return pathname.slice(-1) === '/' ? pathname : pathname + '/';
}

export const usePathnameArray = () => {
  return urlToArray(useLocation().pathname);
}

export const urlToArray = url => url.split('/').filter(x => x !== '');
export const arrayToUrl = array => array.join('/');

export const generateGetFileUrl = (url) => {
  const urlArr = urlToArray(url);
  const repository = urlArr.shift();
  return ['', repository, 'blob/master', ...urlArr].join('/');
}