import {generateGetFileUrl, urlToArray} from "../utils/helpers";
import {FileType, IFile, Url} from "../utils/types";

const getData = (url: Url): Promise<string | string[] | IFile[]> => {
  const urlArr: Array<string> = urlToArray(url);
  const target:string | undefined = urlArr.pop();
  const fileType = target && ~target.indexOf('.') ? FileType.file : FileType.dir;
  const prefix = 'http://localhost:3009/api/repos';

  let _url = fileType === FileType.file
    ? generateGetFileUrl(url)
    : url;
  _url = `${prefix}${_url}`;
  return fetch(`${_url}`).then(res => res.json());
};

export default getData;