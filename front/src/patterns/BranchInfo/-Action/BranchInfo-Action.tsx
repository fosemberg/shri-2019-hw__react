import React from 'react';
import './BranchInfo-Action.scss';
import { cnBranchInfoAction, IBranchInfoAction } from './index';

const BranchInfoAction: React.FC<IBranchInfoAction> = ({
  className,
  children,
}) => <div className={cnBranchInfoAction({}, [className])}>{children}</div>;

export default BranchInfoAction;
