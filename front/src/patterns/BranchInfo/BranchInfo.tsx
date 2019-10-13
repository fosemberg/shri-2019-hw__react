import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo.scss';

export const cnBranchInfo = cn('BranchInfo');

const BranchInfo = ({className, children}) => (
  <div className={cnBranchInfo({}, [className])}>{children}</div>
);

export default BranchInfo;