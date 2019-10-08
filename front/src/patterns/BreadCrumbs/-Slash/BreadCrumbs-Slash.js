import React from 'react';
import {cn} from "@bem-react/classname";
import './BreadCrumbs-Slash.scss';

export const cnBreadCrumbsSlash = cn('BreadCrumbs-Slash');

const BreadCrumbsSlash = ({className, children}) => (
  <div className={cnBreadCrumbsSlash({}, [className])}>{children}</div>
);

export default BreadCrumbsSlash;