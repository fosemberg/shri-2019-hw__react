import React from 'react';
import {cn} from "@bem-react/classname";
import './Tabs-Item.scss';

export const cnTabsItem = cn('TabsItem');

const TabsItem = ({className, children}) => (
  <div className={cnTabsItem({}, [className])}>{children}</div>
);

export default TabsItem;