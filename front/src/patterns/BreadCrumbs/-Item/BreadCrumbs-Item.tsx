import React from 'react';
import {cnBreadCrumbsItem, IBreadCrumbsItem} from "./index";
import './BreadCrumbs-Item.scss';

const BreadCrumbsItem: React.FC<IBreadCrumbsItem> = ({className, children}) => (
  <div className={cnBreadCrumbsItem({}, [className])}>{children}</div>
);

export default BreadCrumbsItem;