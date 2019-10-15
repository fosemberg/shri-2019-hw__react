import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IFile extends IClassNameProps {
  type?: 'dir' | 'branch' | 'file';
  weight?: 'bold';
}

export const cnFile = cn('File');
