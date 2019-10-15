import { withBemMod } from '@bem-react/core';
import { ITableCell } from '../index';
import './Table-Cell_weight_bold.scss';

export const TableCellWeightBold = withBemMod<ITableCell>('Table-Cell', {
  weight: 'bold',
});
