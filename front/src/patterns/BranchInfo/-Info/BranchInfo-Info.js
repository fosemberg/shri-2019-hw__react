import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Info.scss';

export const cnBranchInfoInfo = cn('BranchInfo-Info');

const BranchInfoInfo = ({className, children}) => (
  <div className={cnBranchInfoInfo({}, [className])}>{children}</div>
);

export default BranchInfoInfo;