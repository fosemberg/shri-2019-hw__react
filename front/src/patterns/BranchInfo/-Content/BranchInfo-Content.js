import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Content.scss';

export const cnBranchInfoContent = cn('BranchInfo-Content');

const BranchInfoContent = ({className, children}) => (
  <div className={cnBranchInfoContent({}, [className])}>{children}</div>
);

export default BranchInfoContent;