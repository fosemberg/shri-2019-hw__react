import React from 'react';
import {cn} from "@bem-react/classname";
import './Header-Select.scss';

export const cnHeaderSelect = cn('HeaderSelect');

const HeaderSelect = ({className, children}) => (
  <div className={cnHeaderSelect({}, [className])}>{children}</div>
);

export default HeaderSelect;