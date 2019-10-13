import React from 'react';
import {cn} from "@bem-react/classname";
import {Route} from 'react-router-dom';
import './BreadCrumbs.scss';
import BreadCrumbsItem from "./-Item/BreadCrumbs-Item";

export const cnBreadCrumbs = cn('BreadCrumbs');

const BreadCrumbs = ({className}) =>
    <Route
        path='*'
        render={({location: {pathname}}) =>
            <div className={cnBreadCrumbs({}, [className])}>
                {
                    pathname
                        .split('/')
                        .filter(x => x)
                        .map((crumb, key, crumbs) =>
                            <BreadCrumbsItem{...{
                                key,
                                to: '/' + crumbs
                                    .slice(0, key + 1)
                                    .join('/')
                            }}>
                                {crumb}
                            </BreadCrumbsItem>)
                }
            </div>
        }
    />;

export default BreadCrumbs;