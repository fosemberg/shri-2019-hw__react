import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IBranchInfoHeader extends IClassNameProps {
  space?: 'between';
  align?: 'baseline';
}

export const cnBranchInfoHeader = cn('BranchInfo-Header');
