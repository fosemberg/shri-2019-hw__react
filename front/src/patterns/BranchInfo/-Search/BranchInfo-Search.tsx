import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Search.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBranchInfoSearch = cn('BranchInfo-Search');

const BranchInfoSearch: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfoSearch({}, [className])}>{children}</div>
);

export default BranchInfoSearch;