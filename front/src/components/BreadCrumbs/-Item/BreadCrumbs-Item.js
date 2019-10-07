import React from 'react';
import {cn} from "@bem-react/classname";
import './BreadCrumbs-Item.scss';

export const cnBreadCrumbsItem = cn('BreadCrumbs-Item');

const BreadCrumbsItem = ({className, children}) => (
  <div className={cnBreadCrumbsItem({}, [className])}>{children}</div>
);

export default BreadCrumbsItem;