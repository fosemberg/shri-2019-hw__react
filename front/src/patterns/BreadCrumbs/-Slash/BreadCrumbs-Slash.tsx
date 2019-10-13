import React from 'react';
import {cnBreadCrumbsSlash, IBreadCrumbsSlash} from "./index";
import './BreadCrumbs-Slash.scss';

const BreadCrumbsSlash: React.FC<IBreadCrumbsSlash> = ({className, children}) => (
  <div className={cnBreadCrumbsSlash({}, [className])}>{children}</div>
);

export default BreadCrumbsSlash;