import React from 'react';
import './Header-Select.scss';
import { cnHeaderSelect, IHeaderSelect } from './index';

const HeaderSelect: React.FC<IHeaderSelect> = ({ className, children }) => (
  <div className={cnHeaderSelect({}, [className])}>{children}</div>
);

export default HeaderSelect;
