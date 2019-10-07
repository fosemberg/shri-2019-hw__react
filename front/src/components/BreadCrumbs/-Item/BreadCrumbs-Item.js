import React from 'react';
import {cn} from "@bem-react/classname";
import './BreadCrumbs-Item.scss';
import {Link} from 'react-router-dom';

export const cnBreadCrumbsItem = cn('BreadCrumbs-Item');

const BreadCrumbsItem = ({className, children, to}) => (
    <Link className={cnBreadCrumbsItem({}, [className])} key={to} to={to}>
        {children}
    </Link>
)


export default BreadCrumbsItem;