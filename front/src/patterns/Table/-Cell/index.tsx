import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface ITableCell extends IClassNameProps {
  colSpan?: number;
  type?: 'head';
  weight?: 'bold';
}

export const cnTableCell = cn('Table-Cell');
