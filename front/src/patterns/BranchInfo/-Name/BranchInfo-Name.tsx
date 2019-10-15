import React from 'react';
import './BranchInfo-Name.scss';
import { cnBranchInfoName, IBranchInfoName } from './index';

const BranchInfoName: React.FC<IBranchInfoName> = ({ className, children }) => (
  <div className={cnBranchInfoName({}, [className])}>{children}</div>
);

export default BranchInfoName;
