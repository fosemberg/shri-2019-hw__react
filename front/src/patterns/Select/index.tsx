import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ISelect extends IClassNameProps {
  size?: 'small' | 'big';
}

export const cnSelect = cn('Select');
