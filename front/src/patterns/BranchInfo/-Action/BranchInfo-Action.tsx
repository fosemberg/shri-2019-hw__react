import React from 'react';
import {cnBranchInfoAction, IBranchInfoAction} from "./index";
import './BranchInfo-Action.scss';

const BranchInfoAction: React.FC<IBranchInfoAction> = ({className, children}) => (
  <div className={cnBranchInfoAction({}, [className])}>{children}</div>
);

export default BranchInfoAction;