import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IEditorBody extends IClassNameProps {
  border?: 'collapse';
  color?: 'main';
}

export const cnEditorBody = cn('Editor-Body');
