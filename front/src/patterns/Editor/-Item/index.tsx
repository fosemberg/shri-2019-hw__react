import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IEditorItem extends IClassNameProps {
  color?: 'link' | 'comment';
  weight?: 'bold';
  indentL?: '1x' | '2x' | '3x';
}

export const cnEditorItem = cn('Editor-Item');
