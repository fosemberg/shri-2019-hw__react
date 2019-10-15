import { withBemMod } from '@bem-react/core';
import { ILayoutContainer } from '../index';
import './Layout-Container_size_s.scss';

export const LayoutContainerSizeS = withBemMod<ILayoutContainer>(
  'Layout-Container',
  { size: 's' }
);
