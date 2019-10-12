import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Header.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBranchInfoHeader = cn('BranchInfo-Header');

const BranchInfoHeader: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfoHeader({}, [className])}>{children}</div>
);

export default BranchInfoHeader;