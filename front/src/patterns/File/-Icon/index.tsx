import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IFileIcon extends IClassNameProps {
  type?: 'dir' | 'readme' | 'file' | 'branch' | 'code';
}

export const cnFileIcon = cn('File-Icon');
