import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IDiffInfo extends IClassNameProps {
  color?: 'ghost';
}

export const cnDiffInfo = cn('DiffInfo');
