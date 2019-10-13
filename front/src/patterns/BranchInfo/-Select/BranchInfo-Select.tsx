import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Select.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBranchInfoSelect = cn('BranchInfo-Select');

const BranchInfoSelect: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfoSelect({}, [className])}>{children}</div>
);

export default BranchInfoSelect;