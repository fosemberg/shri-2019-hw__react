import { withBemMod } from '@bem-react/core';
import { IHeaderSelect } from '../index';
import './Header-Select_color_default.scss';

export const HeaderSelectColorDefault = withBemMod<IHeaderSelect>(
  'Header-Select',
  { color: 'default' }
);
