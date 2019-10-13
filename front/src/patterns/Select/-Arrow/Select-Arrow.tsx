import React from 'react';
import {cn} from "@bem-react/classname";
import './Select-Arrow.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnSelectArrow = cn('Select-Arrow');

const SelectArrow: React.FC<IClassNameProps> = ({className, children}) => (
  <i className={cnSelectArrow({}, [className])}>{children}</i>
);

export default SelectArrow;