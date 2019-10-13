import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IBranchInfo extends IClassNameProps {
  border?: 'bottom';
}

export const cnBranchInfo = cn('BranchInfo');
