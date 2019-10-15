import React from 'react';
import './BranchInfo-Header.scss';
import { cnBranchInfoHeader, IBranchInfoHeader } from './index';

const BranchInfoHeader: React.FC<IBranchInfoHeader> = ({
  className,
  children,
}) => <div className={cnBranchInfoHeader({}, [className])}>{children}</div>;

export default BranchInfoHeader;
