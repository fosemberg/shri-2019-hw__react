import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IBranchInfo extends IClassNameProps {
  border?: 'bottom';
}

export const cnBranchInfo = cn('BranchInfo');
