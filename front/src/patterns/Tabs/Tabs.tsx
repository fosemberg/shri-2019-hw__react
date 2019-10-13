import React from 'react';
import {cnTabs, ITabs} from "./index";
import './Tabs.scss';

const Tabs: React.FC<ITabs> = ({className, children}) => (
  <div className={cnTabs({}, [className])}>{children}</div>
);

export default Tabs;