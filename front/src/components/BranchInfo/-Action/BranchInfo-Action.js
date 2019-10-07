import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Action.scss';

export const cnBranchInfoAction = cn('BranchInfoAction');

const BranchInfoAction = ({className, children}) => (
  <div className={cnBranchInfoAction({}, [className])}>{children}</div>
);

export default BranchInfoAction;