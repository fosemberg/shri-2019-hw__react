import React from 'react';
import { cnSelectArrow, ISelectArrow } from './index';
import './Select-Arrow.scss';

const SelectArrow: React.FC<ISelectArrow> = ({ className, children }) => (
  <i className={cnSelectArrow({}, [className])}>{children}</i>
);

export default SelectArrow;
