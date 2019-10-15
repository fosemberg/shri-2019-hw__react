import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IEditorHeader extends IClassNameProps {
  borderV?: 'ghost';
  spaceH?: 's' | 'm';
  spaceV?: 's' | 'm';
  color?: 'default' | 'pale';
}

export const cnEditorHeader = cn('Editor-Header');
