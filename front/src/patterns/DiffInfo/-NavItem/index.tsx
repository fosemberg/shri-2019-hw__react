import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IDiffInfoNavItem extends IClassNameProps {
  state?: 'active';
}

export const cnDiffInfoNavItem = cn('DiffInfo-NavItem');
