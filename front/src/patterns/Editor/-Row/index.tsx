import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IEditorRow extends IClassNameProps {
  color?: 'added' | 'deleted';
}

export const cnEditorRow = cn('Editor-Row');
