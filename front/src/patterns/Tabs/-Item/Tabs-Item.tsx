import React from 'react';
import {cn} from "@bem-react/classname";
import './Tabs-Item.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnTabsItem = cn('Tabs-Item');

const TabsItem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnTabsItem({}, [className])}>{children}</div>
);

export default TabsItem;