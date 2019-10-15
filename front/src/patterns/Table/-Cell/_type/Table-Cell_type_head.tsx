import { withBemMod } from '@bem-react/core';
import { ITableCell } from '../index';
import './Table-Cell_type_head.scss';

export const TableCellTypeHead = withBemMod<ITableCell>('Table-Cell', {
  type: 'head',
});
