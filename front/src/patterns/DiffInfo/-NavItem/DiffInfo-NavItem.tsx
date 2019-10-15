import React from 'react';
import './DiffInfo-NavItem.scss';
import { cnDiffInfoNavItem, IDiffInfoNavItem } from './index';

const DiffInfoNavItem: React.FC<IDiffInfoNavItem> = ({
  className,
  children,
}) => <div className={cnDiffInfoNavItem({}, [className])}>{children}</div>;

export default DiffInfoNavItem;
