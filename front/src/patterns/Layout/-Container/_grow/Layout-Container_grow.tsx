import { withBemMod } from '@bem-react/core';
import { ILayoutContainer } from '../index';
import './Layout-Container_grow.scss';

export const LayoutContainerGrow = withBemMod<ILayoutContainer>(
  'Layout-Container',
  { grow: true }
);
