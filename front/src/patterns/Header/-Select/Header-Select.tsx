import React from 'react';
import {cnHeaderSelect, IHeaderSelect} from "./index";
import './Header-Select.scss';

const HeaderSelect: React.FC<IHeaderSelect> = ({className, children}) => (
  <div className={cnHeaderSelect({}, [className])}>{children}</div>
);

export default HeaderSelect;