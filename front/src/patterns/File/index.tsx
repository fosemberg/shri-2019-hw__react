import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IFile extends IClassNameProps {
  type?: 'dir' | 'branch' | 'file';
  weight?: 'bold';
}

export const cnFile = cn('File');
