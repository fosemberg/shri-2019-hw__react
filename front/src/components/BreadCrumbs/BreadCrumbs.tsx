import React from 'react';
import {Route} from 'react-router-dom';
import '../../patterns/BreadCrumbs/BreadCrumbs.scss';
import BreadCrumbsBase from "../../patterns/BreadCrumbs/BreadCrumbs";
import {compose} from "@bem-react/core";
import {BreadCrumbsBorderB} from "../../patterns/BreadCrumbs/_border-b/BreadCrumbs_border-b";
import BreadCrumbsItem from "./-Item/BreadCrumbs-Item";
import { IClassNameProps } from '@bem-react/core';

const BreadCrumbsView = compose(
    BreadCrumbsBorderB
)(BreadCrumbsBase);

const BreadCrumbs: React.FC<IClassNameProps> = ({className}) =>
    <Route
        path='*'
        render={({location: {pathname}}) =>
            <BreadCrumbsView className={className}>
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
            </BreadCrumbsView>
        }
    />;

export default BreadCrumbs;