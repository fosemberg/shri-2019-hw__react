import React from 'react';
import { cnSelectName, ISelectName } from './index';
import './Select-Name.scss';

const SelectName: React.FC<ISelectName> = ({ className, children }) => (
  <span className={cnSelectName({}, [className])}>{children}</span>
);

export default SelectName;
