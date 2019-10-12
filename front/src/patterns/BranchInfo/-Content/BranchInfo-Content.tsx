import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Content.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBranchInfoContent = cn('BranchInfo-Content');

const BranchInfoContent: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfoContent({}, [className])}>{children}</div>
);

export default BranchInfoContent;