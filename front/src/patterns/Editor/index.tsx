import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IEditor extends IClassNameProps {
  border?: 'faded' | 'ghost';
}

export const cnEditor = cn('Editor');
