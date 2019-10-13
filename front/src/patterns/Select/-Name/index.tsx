import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface ISelectName extends IClassNameProps {
  weight?: 'bold';
  color?: 'secondary';
}

export const cnSelectName = cn('Select-Name');
