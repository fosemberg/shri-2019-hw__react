import React from 'react';
import {cn} from "@bem-react/classname";
import './Select-Arrow.scss';

export const cnSelectArrow = cn('Select-Arrow');

const SelectArrow = ({className, children}) => (
  <i className={cnSelectArrow({}, [className])}>{children}</i>
);

export default SelectArrow;