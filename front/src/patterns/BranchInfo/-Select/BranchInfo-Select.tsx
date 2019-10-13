import React from 'react';
import {cnBranchInfoSelect, IBranchInfoSelect} from "./index";
import './BranchInfo-Select.scss';

const BranchInfoSelect: React.FC<IBranchInfoSelect> = ({className, children}) => (
  <div className={cnBranchInfoSelect({}, [className])}>{children}</div>
);

export default BranchInfoSelect;