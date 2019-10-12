export enum Page {
  loader = 'LOADER',
  files = 'FILES',
  details = 'DETAILS',
  repositories = 'REPOSITORIES',
}

export enum FileType {
  dir = 'dir',
  file = 'file',
}

export type Hash = string;
export type Url = string;

export interface IFile {
  num: string;
  fileType: FileType;
  lastCommit: Hash;
  name: string;
  commitMessage: string;
  committer: string;
  updated: string;
}