import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IEditorRow extends IClassNameProps {
  color?: 'added' | 'deleted';
}

export const cnEditorRow = cn('Editor-Row');
