import { withBemMod } from '@bem-react/core';
import './BranchInfo_border_bottom.scss';
import {IBranchInfo} from "../index";

export const BranchInfoBorderBottom = withBemMod<IBranchInfo>('BranchInfo', { border: 'bottom'})