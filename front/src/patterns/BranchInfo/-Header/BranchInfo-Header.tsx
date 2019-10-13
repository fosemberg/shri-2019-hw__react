import React from 'react';
import {cnBranchInfoHeader, IBranchInfoHeader} from "./index";
import './BranchInfo-Header.scss';

const BranchInfoHeader: React.FC<IBranchInfoHeader> = ({className, children}) => (
  <div className={cnBranchInfoHeader({}, [className])}>{children}</div>
);

export default BranchInfoHeader;