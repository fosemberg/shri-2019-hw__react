import React from 'react';
import {cn} from "@bem-react/classname";
import './BreadCrumbs-Slash.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBreadCrumbsSlash = cn('BreadCrumbs-Slash');

const BreadCrumbsSlash: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBreadCrumbsSlash({}, [className])}>{children}</div>
);

export default BreadCrumbsSlash;