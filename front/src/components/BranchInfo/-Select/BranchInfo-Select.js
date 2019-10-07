import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Select.scss';

export const cnBranchInfoSelect = cn('BranchInfoSelect');

const BranchInfoSelect = ({className, children}) => (
  <div className={cnBranchInfoSelect({}, [className])}>{children}</div>
);

export default BranchInfoSelect;