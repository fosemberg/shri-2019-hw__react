export interface IParams<T> {
  params: T;
}

export interface IBody<T> {
  body: T;
}

export interface IQuery<T> {
  query: T;
}

export interface IWithRepositoryId {
  repositoryId: string;
}

export interface IWithUrl {
  url: string;
}

export interface IWithCommitHash {
  commitHash: string;
}

export interface IWithPageSize {
  pageSize: string;
}

export interface IWithPageNumber {
  pageNumber: string;
}

export interface IWithPath {
  0: string;
}

export interface IWithMessage {
  message: string;
}

export interface IFile {
  num: string;
  fileType: string;
  lastCommit: string;
  name: string;
  commitMessage: string;
  committer: string;
  updated: string;
}
