import React from 'react';
import './Arrow.scss';
import { cnArrow, IArrow } from './index';

const Arrow: React.FC<IArrow> = ({ className, children }) => (
  <div className={cnArrow({}, [className])}>{children}</div>
);

export default Arrow;
