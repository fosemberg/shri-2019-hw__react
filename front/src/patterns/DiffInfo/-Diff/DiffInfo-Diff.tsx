import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo-Diff.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnDiffInfoDiff = cn('DiffInfo-Diff');

const DiffInfoDiff: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnDiffInfoDiff({}, [className])}>{children}</div>
);

export default DiffInfoDiff;