import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ITable extends IClassNameProps {
  hide?: 'touch';
}

export const cnTable = cn('Table');
