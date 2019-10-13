import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface ISelect extends IClassNameProps {
  size?: 'small' | 'big';
}

export const cnSelect = cn('Select');
