import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnDiffInfo = cn('DiffInfo');

const DiffInfo: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnDiffInfo({}, [className])}>{children}</div>
);

export default DiffInfo;