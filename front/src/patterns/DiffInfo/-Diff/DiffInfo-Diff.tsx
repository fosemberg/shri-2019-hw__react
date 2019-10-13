import React from 'react';
import {cnDiffInfoDiff, IDiffInfoDiff} from "./index";
import './DiffInfo-Diff.scss';

const DiffInfoDiff: React.FC<IDiffInfoDiff> = ({className, children}) => (
  <div className={cnDiffInfoDiff({}, [className])}>{children}</div>
);

export default DiffInfoDiff;