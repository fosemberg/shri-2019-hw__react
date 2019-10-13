import React from 'react';
import {cnBreadCrumbs, IBreadCrumbs} from "./index";
import './BreadCrumbs.scss';

const BreadCrumbs: React.FC<IBreadCrumbs> = ({className, children}) => (
  <div className={cnBreadCrumbs({}, [className])}>{children}</div>
);

export default BreadCrumbs;