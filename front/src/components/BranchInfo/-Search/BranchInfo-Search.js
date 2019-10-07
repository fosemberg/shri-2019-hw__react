import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Search.scss';

export const cnBranchInfoSearch = cn('BranchInfoSearch');

const BranchInfoSearch = ({className, children}) => (
  <div className={cnBranchInfoSearch({}, [className])}>{children}</div>
);

export default BranchInfoSearch;