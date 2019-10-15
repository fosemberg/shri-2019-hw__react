import { withBemMod } from '@bem-react/core';
import { IBranchInfo } from '../index';
import './BranchInfo_border_bottom.scss';

export const BranchInfoBorderBottom = withBemMod<IBranchInfo>('BranchInfo', {
  border: 'bottom',
});
