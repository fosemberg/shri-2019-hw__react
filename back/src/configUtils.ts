import {IWithMessage} from "./types";

export const createMessageObject = (str: string): IWithMessage => ({ message: str });
export const createMessageObjectString = (str: string): string =>
  JSON.stringify(createMessageObject(str));
