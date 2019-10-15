import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { cnBreadCrumbsItem } from '../../../patterns/BreadCrumbs/-Item';
import '../../../patterns/BreadCrumbs/-Item/BreadCrumbs-Item.scss';
import { cnLink } from '../../../patterns/Link';
import '../../../patterns/Link/Link.scss';
import { Url } from '../../../utils/types';
import './BreadCrumbs-Item.scss';

interface IBreadCrumbsItem extends IClassNameProps {
  to: Url;
}

const BreadCrumbsItem: React.FC<IBreadCrumbsItem> = ({
  className,
  children,
  to,
}) => (
  <Link
    className={cnBreadCrumbsItem({}, [className, cnLink()])}
    key={to}
    to={to}
  >
    {children}
  </Link>
);

export default BreadCrumbsItem;
