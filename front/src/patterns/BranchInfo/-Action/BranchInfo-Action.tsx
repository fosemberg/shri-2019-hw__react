import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Action.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBranchInfoAction = cn('BranchInfo-Action');

const BranchInfoAction: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfoAction({}, [className])}>{children}</div>
);

export default BranchInfoAction;