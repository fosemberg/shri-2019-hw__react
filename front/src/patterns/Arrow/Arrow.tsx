import React from 'react';
import {cnArrow, IArrow} from "./index";
import './Arrow.scss';

const Arrow: React.FC<IArrow> = ({className, children}) => (
  <div className={cnArrow({}, [className])}>{children}</div>
);

export default Arrow;