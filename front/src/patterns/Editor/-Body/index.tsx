import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IEditorBody extends IClassNameProps {
  border?: 'collapse';
  color?: 'main';
}

export const cnEditorBody = cn('Editor-Body');
