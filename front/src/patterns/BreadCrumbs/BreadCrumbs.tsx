import React from 'react';
import './BreadCrumbs.scss';
import { cnBreadCrumbs, IBreadCrumbs } from './index';

const BreadCrumbs: React.FC<IBreadCrumbs> = ({ className, children }) => (
  <div className={cnBreadCrumbs({}, [className])}>{children}</div>
);

export default BreadCrumbs;
