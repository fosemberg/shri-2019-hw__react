import React from 'react';
import './DiffInfo.scss';
import { cnDiffInfo, IDiffInfo } from './index';

const DiffInfo: React.FC<IDiffInfo> = ({ className, children }) => (
  <div className={cnDiffInfo({}, [className])}>{children}</div>
);

export default DiffInfo;
