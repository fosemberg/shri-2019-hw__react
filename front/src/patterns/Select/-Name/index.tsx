import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ISelectName extends IClassNameProps {
  weight?: 'bold';
  color?: 'secondary';
}

export const cnSelectName = cn('Select-Name');
