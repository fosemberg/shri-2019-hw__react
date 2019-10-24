import { Response } from 'express';
import { IFile } from './types';

const { exec } = require('child_process');
const { RESPONSE } = require('./config');

export const execCommand = (
  command: string,
  callbackOut = (x: any) => x,
  callbackErr = callbackOut,
  options = {}
) =>
  exec(command, options, (err: Error, out: string) =>
    err ? callbackErr(err) && console.log(err) : callbackOut(out)
  );

export const execCommandWithRes = (
  command: string,
  res: Response,
  callbackOut: (x: string) => string | string[] | IFile[] = (x: string) => x,
  callbackErr = RESPONSE.NO_ROUT(res),
  options = {}
) =>
  execCommand(
    command,
    (json) => res.json(callbackOut(json)),
    callbackErr,
    options
  );

export const arrayFromOut = (out: string): string[] =>
  out.split('\n').slice(0, -1);

export const getPage = (
  pages: string[],
  pageSize: number = pages.length,
  pageNumber: number = 1
): string[] => [...pages].splice((pageNumber - 1) * pageSize, pageSize);
