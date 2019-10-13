import React from 'react';
import {cn} from "@bem-react/classname";
import './Tabs.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnTabs = cn('Tabs');

const Tabs: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnTabs({}, [className])}>{children}</div>
);

export default Tabs;