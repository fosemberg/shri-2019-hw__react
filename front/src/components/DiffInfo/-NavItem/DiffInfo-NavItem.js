import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo-NavItem.scss';

export const cnDiffInfoNavItem = cn('DiffInfoNavItem');

const DiffInfoNavItem = ({className, children}) => (
  <div className={cnDiffInfoNavItem({}, [className])}>{children}</div>
);

export default DiffInfoNavItem;