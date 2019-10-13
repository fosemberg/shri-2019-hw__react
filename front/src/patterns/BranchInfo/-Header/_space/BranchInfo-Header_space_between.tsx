import { withBemMod } from '@bem-react/core';
import {IBranchInfoHeader} from "../index";
import './BranchInfo-Header_space_between.scss';

export const BranchInfoHeaderSpaceBetween = withBemMod<IBranchInfoHeader>('BranchInfo-Header', { space: 'between'});