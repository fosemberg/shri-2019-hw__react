import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Name.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBranchInfoName = cn('BranchInfo-Name');

const BranchInfoName: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfoName({}, [className])}>{children}</div>
);

export default BranchInfoName;