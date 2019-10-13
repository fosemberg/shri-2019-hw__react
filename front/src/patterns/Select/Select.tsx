import React from 'react';
import {cnSelect, ISelect} from "./index";
import './Select.scss';

const Select: React.FC<ISelect> = ({className, children}) => (
  <div className={cnSelect({}, [className])}>{children}</div>
);

export default Select;