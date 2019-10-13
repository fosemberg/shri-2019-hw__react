import React from 'react';
import {cnDiffInfoNavItem, IDiffInfoNavItem} from "./index";
import './DiffInfo-NavItem.scss';

const DiffInfoNavItem: React.FC<IDiffInfoNavItem> = ({className, children}) => (
  <div className={cnDiffInfoNavItem({}, [className])}>{children}</div>
);

export default DiffInfoNavItem;