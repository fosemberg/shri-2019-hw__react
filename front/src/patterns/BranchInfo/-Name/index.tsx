import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IBranchInfoName extends IClassNameProps {
  size?: 'xl';
}

export const cnBranchInfoName = cn('BranchInfo-Name');
