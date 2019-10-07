import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo.scss';

export const cnDiffInfo = cn('DiffInfo');

const DiffInfo = ({className, children}) => (
  <div className={cnDiffInfo({}, [className])}>{children}</div>
);

export default DiffInfo;