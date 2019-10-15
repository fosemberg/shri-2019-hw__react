import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IFileIcon extends IClassNameProps {
  type?: 'dir' | 'readme' | 'file' | 'branch' | 'code';
}

export const cnFileIcon = cn('File-Icon');
