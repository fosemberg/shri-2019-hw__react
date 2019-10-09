import {generateGetFileUrl, urlToArray} from "../utils/helpers";
import {FileType} from "../utils/types";

const getData = (url) => {
  const urlArr = urlToArray(url);
  const target = urlArr.pop();
  const fileType = target && ~target.indexOf('.') ? FileType.file : FileType.dir;
  const prefix = 'http://localhost:3009/api/repos';

  let _url = fileType === FileType.file
    ? generateGetFileUrl(url)
    : url;
  _url = `${prefix}${_url}`;
  return fetch(`${_url}`).then(res => res.json());
}

export default getData;