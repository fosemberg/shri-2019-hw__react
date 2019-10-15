import React from 'react';
import './BranchInfo-Search.scss';
import { cnBranchInfoSearch, IBranchInfoSearch } from './index';

const BranchInfoSearch: React.FC<IBranchInfoSearch> = ({
  className,
  children,
}) => <div className={cnBranchInfoSearch({}, [className])}>{children}</div>;

export default BranchInfoSearch;
