import React from 'react';
import {cn} from "@bem-react/classname";
import {Route} from 'react-router-dom';
import './BreadCrumbs.scss';
import BreadCrumbsItem from "./-Item/BreadCrumbs-Item";

export const cnBreadCrumbs = cn('BreadCrumbs');

const BreadCrumbs = () =>
    <Route
        path="*"
        render={({location: {pathname}}) =>
            <div className={cnBreadCrumbs()}>
                {
                    pathname
                        .split("/")
                        .map((crumb, key) =>
                            <BreadCrumbsItem {...{key}}>{crumb}</BreadCrumbsItem>)
                }
            </div>
        }
    />;

export default BreadCrumbs;