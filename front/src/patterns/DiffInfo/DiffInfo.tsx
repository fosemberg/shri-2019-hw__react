import React from 'react';
import {cnDiffInfo, IDiffInfo} from "./index";
import './DiffInfo.scss';

const DiffInfo: React.FC<IDiffInfo> = ({className, children}) => (
  <div className={cnDiffInfo({}, [className])}>{children}</div>
);

export default DiffInfo;