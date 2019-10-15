import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IBranchInfoHeader extends IClassNameProps {
  space?: 'between';
  align?: 'baseline';
}

export const cnBranchInfoHeader = cn('BranchInfo-Header');
