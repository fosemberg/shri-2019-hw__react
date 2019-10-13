import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IBreadCrumbs extends IClassNameProps {
  borderB?: '';
}

export const cnBreadCrumbs = cn('BreadCrumbs');
