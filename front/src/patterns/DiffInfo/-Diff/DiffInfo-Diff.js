import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo-Diff.scss';

export const cnDiffInfoDiff = cn('DiffInfo-Diff');

const DiffInfoDiff = ({className, children}) => (
  <div className={cnDiffInfoDiff({}, [className])}>{children}</div>
);

export default DiffInfoDiff;