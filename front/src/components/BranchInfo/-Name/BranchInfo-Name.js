import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Name.scss';

export const cnBranchInfoName = cn('BranchInfoName');

const BranchInfoName = ({className, children}) => (
  <div className={cnBranchInfoName({}, [className])}>{children}</div>
);

export default BranchInfoName;