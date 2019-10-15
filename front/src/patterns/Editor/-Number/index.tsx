import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IEditorNumber extends IClassNameProps {
  width?: 's';
  spaceL?: 'touch';
}

export const cnEditorNumber = cn('Editor-Number');
