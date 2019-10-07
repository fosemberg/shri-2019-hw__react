import React from 'react';
import {cn} from "@bem-react/classname";
import './BreadCrumbs.scss';

export const cnBreadCrumbs = cn('BreadCrumbs');

const BreadCrumbs = ({className, children}) => (
  <div className={cnBreadCrumbs({}, [className])}>{children}</div>
);

export default BreadCrumbs;