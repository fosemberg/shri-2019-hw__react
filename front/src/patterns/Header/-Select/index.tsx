import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IHeaderSelect extends IClassNameProps {
  color?: 'default';
}

export const cnHeaderSelect = cn('Header-Select');
