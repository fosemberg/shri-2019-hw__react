import { withBemMod } from '@bem-react/core';
import { IDiffInfoNavItem } from '../index';
import './DiffInfo-NavItem_state_active.scss';

export const DiffInfoNavItemStateActive = withBemMod<IDiffInfoNavItem>(
  'DiffInfo-NavItem',
  { state: 'active' }
);
