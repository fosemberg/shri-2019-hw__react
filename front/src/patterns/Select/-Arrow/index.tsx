import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ISelectArrow extends IClassNameProps {
  position?: 'center' | 'baseline';
}

export const cnSelectArrow = cn('Select-Arrow');
