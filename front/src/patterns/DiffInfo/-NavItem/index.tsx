import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IDiffInfoNavItem extends IClassNameProps {
  state?: 'active';
}

export const cnDiffInfoNavItem = cn('DiffInfo-NavItem');
