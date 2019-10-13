import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo-NavItem.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnDiffInfoNavItem = cn('DiffInfo-NavItem');

const DiffInfoNavItem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnDiffInfoNavItem({}, [className])}>{children}</div>
);

export default DiffInfoNavItem;