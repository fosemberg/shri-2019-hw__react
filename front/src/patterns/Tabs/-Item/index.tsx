import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface ITabsItem extends IClassNameProps {
  state?: 'active';
}

export const cnTabsItem = cn('Tabs-Item');
