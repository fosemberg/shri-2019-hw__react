import React from 'react';
import {cn} from "@bem-react/classname";
import './Select.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnSelect = cn('Select');

const Select: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnSelect({}, [className])}>{children}</div>
);

export default Select;