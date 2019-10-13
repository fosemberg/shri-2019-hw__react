import React from 'react';
import {cnBranchInfo, IBranchInfo} from "./index";
import './BranchInfo.scss';

const BranchInfo: React.FC<IBranchInfo> = ({className, children}) => (
  <div className={cnBranchInfo({}, [className])}>{children}</div>
);

export default BranchInfo;