import React from 'react';
import {cnTabsItem, ITabsItem} from "./index";
import './Tabs-Item.scss';

const TabsItem: React.FC<ITabsItem> = ({className, children}) => (
  <div className={cnTabsItem({}, [className])}>{children}</div>
);

export default TabsItem;