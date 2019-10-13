import React from 'react';
import {cn} from "@bem-react/classname";
import './Select-Name.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnSelectName = cn('Select-Name');

const SelectName: React.FC<IClassNameProps> = ({className, children}) => (
  <span className={cnSelectName({}, [className])}>{children}</span>
);

export default SelectName;