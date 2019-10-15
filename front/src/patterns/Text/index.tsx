import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IText extends IClassNameProps {
  size?: 'xs';
  color?:
    | 'purple'
    | 'success'
    | 'accented'
    | 'reserved'
    | 'diff-comment'
    | 'diff-accented';
  indentR?: 'm';
}

export const cnText = cn('Text');
