import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IArrow extends IClassNameProps {
  state?: 'down' | 'right' | 'left';
  color?: 'secondary' | 'faded';
  size?: 's' | 'm' | 'l';
  indentR?: 'xxxs';
}

export const cnArrow = cn('Arrow');
