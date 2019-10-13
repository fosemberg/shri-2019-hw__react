import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IBranchInfoName extends IClassNameProps {
  size?: 'xl';
}

export const cnBranchInfoName = cn('BranchInfo-Name');
