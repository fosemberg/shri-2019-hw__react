import React from 'react';
import {cn} from "@bem-react/classname";
import './Header-Select.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnHeaderSelect = cn('Header-Select');

const HeaderSelect: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnHeaderSelect({}, [className])}>{children}</div>
);

export default HeaderSelect;