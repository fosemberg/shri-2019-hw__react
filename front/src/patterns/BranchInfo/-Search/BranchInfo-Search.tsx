import React from 'react';
import {cnBranchInfoSearch, IBranchInfoSearch} from "./index";
import './BranchInfo-Search.scss';

const BranchInfoSearch: React.FC<IBranchInfoSearch> = ({className, children}) => (
  <div className={cnBranchInfoSearch({}, [className])}>{children}</div>
);

export default BranchInfoSearch;