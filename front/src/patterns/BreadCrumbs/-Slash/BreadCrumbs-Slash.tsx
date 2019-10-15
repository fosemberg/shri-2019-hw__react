import React from 'react';
import './BreadCrumbs-Slash.scss';
import { cnBreadCrumbsSlash, IBreadCrumbsSlash } from './index';

const BreadCrumbsSlash: React.FC<IBreadCrumbsSlash> = ({
  className,
  children,
}) => <div className={cnBreadCrumbsSlash({}, [className])}>{children}</div>;

export default BreadCrumbsSlash;
