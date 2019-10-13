import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IEditor extends IClassNameProps {
  border?: 'faded' | 'ghost';
}

export const cnEditor = cn('Editor');
