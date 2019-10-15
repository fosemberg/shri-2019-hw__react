import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IEditorItem extends IClassNameProps {
  color?: 'link' | 'comment';
  weight?: 'bold';
  indentL?: '1x' | '2x' | '3x';
}

export const cnEditorItem = cn('Editor-Item');
