import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo-Diff.scss';

export const cnDiffInfoDiff = cn('DiffInfoDiff');

const DiffInfoDiff = ({className, children}) => (
  <div className={cnDiffInfoDiff({}, [className])}>{children}</div>
);

export default DiffInfoDiff;