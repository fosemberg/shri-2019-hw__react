import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Name.scss';

export const cnBranchInfoName = cn('BranchInfo-Name');

const BranchInfoName = ({className, children}) => (
  <div className={cnBranchInfoName({}, [className])}>{children}</div>
);

export default BranchInfoName;