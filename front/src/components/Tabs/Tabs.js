import React from 'react';
import {cn} from "@bem-react/classname";
import './Tabs.scss';

export const cnTabs = cn('Tabs');

const Tabs = ({className, children}) => (
  <div className={cnTabs({}, [className])}>{children}</div>
);

export default Tabs;