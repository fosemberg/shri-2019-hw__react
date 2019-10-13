import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface ISelectArrow extends IClassNameProps {
  position?: 'center' | 'baseline';
}

export const cnSelectArrow = cn('Select-Arrow');
