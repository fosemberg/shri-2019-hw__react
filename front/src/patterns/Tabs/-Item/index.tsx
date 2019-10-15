import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ITabsItem extends IClassNameProps {
  state?: 'active';
}

export const cnTabsItem = cn('Tabs-Item');
