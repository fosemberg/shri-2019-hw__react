import React from 'react';
import './BranchInfo.scss';
import { cnBranchInfo, IBranchInfo } from './index';

const BranchInfo: React.FC<IBranchInfo> = ({ className, children }) => (
  <div className={cnBranchInfo({}, [className])}>{children}</div>
);

export default BranchInfo;
