import React from 'react';
import {cnBranchInfoName, IBranchInfoName} from "./index";
import './BranchInfo-Name.scss';

const BranchInfoName: React.FC<IBranchInfoName> = ({className, children}) => (
  <div className={cnBranchInfoName({}, [className])}>{children}</div>
);

export default BranchInfoName;