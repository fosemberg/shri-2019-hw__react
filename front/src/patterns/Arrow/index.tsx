import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IArrow extends IClassNameProps {
  state?: 'down' | 'right' | 'left';
  color?: 'secondary' | 'faded';
  size?: 's' | 'm' | 'l';
  indentR?: 'xxxs';
}

export const cnArrow = cn('Arrow');
