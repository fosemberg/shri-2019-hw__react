import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IIcon extends IClassNameProps {
  type?: 'arrow-up' | 'code';
  size?: 'xs' | 's';
  indentR?: 'xxs';
}

export const cnIcon = cn('Icon');
