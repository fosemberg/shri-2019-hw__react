import React from 'react';
import './BreadCrumbs-Item.scss';
import { cnBreadCrumbsItem, IBreadCrumbsItem } from './index';

const BreadCrumbsItem: React.FC<IBreadCrumbsItem> = ({
  className,
  children,
}) => <div className={cnBreadCrumbsItem({}, [className])}>{children}</div>;

export default BreadCrumbsItem;
