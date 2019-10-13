import React from 'react';
import './BranchInfo.scss';
import {IClassNameProps} from "@bem-react/core";
import {cnBranchInfo} from "./index";


const BranchInfo: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBranchInfo({}, [className])}>{children}</div>
);

export default BranchInfo;