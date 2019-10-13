import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBranchInfo = cn('BranchInfo');

const BranchInfo: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfo({}, [className])}>{children}</div>
);

export default BranchInfo;