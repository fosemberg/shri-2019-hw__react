import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ITableCell extends IClassNameProps {
  colSpan?: number;
  type?: 'head';
  weight?: 'bold';
}

export const cnTableCell = cn('Table-Cell');
