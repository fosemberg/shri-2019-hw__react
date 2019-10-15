import { withBemMod } from '@bem-react/core';
import { IBranchInfoName } from '../index';
import './BranchInfo-Name_size_xl.scss';

export const BranchInfoNameSizeXl = withBemMod<IBranchInfoName>(
  'BranchInfo-Name',
  { size: 'xl' }
);
