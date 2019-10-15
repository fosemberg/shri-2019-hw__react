import { withBemMod } from '@bem-react/core';
import { ILayoutContainer } from '../index';
import './Layout-Container_align_center.scss';

export const LayoutContainerAlignCenter = withBemMod<ILayoutContainer>(
  'Layout-Container',
  { align: 'center' }
);
