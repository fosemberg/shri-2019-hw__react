import React from 'react';
import './DiffInfo-Diff.scss';
import { cnDiffInfoDiff, IDiffInfoDiff } from './index';

const DiffInfoDiff: React.FC<IDiffInfoDiff> = ({ className, children }) => (
  <div className={cnDiffInfoDiff({}, [className])}>{children}</div>
);

export default DiffInfoDiff;
