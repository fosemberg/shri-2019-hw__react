import React from 'react';
import './BranchInfo-Select.scss';
import { cnBranchInfoSelect, IBranchInfoSelect } from './index';

const BranchInfoSelect: React.FC<IBranchInfoSelect> = ({
  className,
  children,
}) => <div className={cnBranchInfoSelect({}, [className])}>{children}</div>;

export default BranchInfoSelect;
