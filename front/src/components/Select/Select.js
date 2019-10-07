import React from 'react';
import {cn} from "@bem-react/classname";
import './Select.scss';

export const cnSelect = cn('Select');

const Select = ({className, children}) => (
  <div className={cnSelect({}, [className])}>{children}</div>
);

export default Select;