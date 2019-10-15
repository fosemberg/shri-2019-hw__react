import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IBreadCrumbs extends IClassNameProps {
  borderB?: '';
}

export const cnBreadCrumbs = cn('BreadCrumbs');
