import { withBemMod } from '@bem-react/core';
import { ITable } from '../index';
import './Table_hide_touch.scss';

export const TableHideTouch = withBemMod<ITable>('Table', { hide: 'touch' });
