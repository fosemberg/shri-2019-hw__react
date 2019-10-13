import { withBemMod } from '@bem-react/core';
import {IBranchInfoHeader} from "../index";
import './BranchInfo-Header_align_baseline.scss';

export const BranchInfoHeaderAlignBaseline = withBemMod<IBranchInfoHeader>('BranchInfo-Header', { align: 'baseline'});