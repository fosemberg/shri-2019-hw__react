import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IEditorHeader extends IClassNameProps {
  borderV?: 'ghost';
  spaceH?: 's' | 'm';
  spaceV?: 's' | 'm';
  color?: 'default' | 'pale';
}

export const cnEditorHeader = cn('Editor-Header');
