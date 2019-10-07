import React from 'react';
import {cn} from "@bem-react/classname";
import './Select-Arrow.scss';

export const cnSelectArrow = cn('Select-Arrow');

const SelectArrow = ({className, children}) => (
  <div className={cnSelectArrow({}, [className])}>{children}</div>
);

export default SelectArrow;