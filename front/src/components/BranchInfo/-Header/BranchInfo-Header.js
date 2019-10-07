import React from 'react';
import {cn} from "@bem-react/classname";
import './BranchInfo-Header.scss';

export const cnBranchInfoHeader = cn('BranchInfoHeader');

const BranchInfoHeader = ({className, children}) => (
  <div className={cnBranchInfoHeader({}, [className])}>{children}</div>
);

export default BranchInfoHeader;