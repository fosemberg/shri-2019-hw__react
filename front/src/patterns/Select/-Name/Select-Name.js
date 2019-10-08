import React from 'react';
import {cn} from "@bem-react/classname";
import './Select-Name.scss';

export const cnSelectName = cn('Select-Name');

const SelectName = ({className, children}) => (
  <span className={cnSelectName({}, [className])}>{children}</span>
);

export default SelectName;