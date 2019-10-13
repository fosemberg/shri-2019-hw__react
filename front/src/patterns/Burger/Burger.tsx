import React from 'react';
import {cn} from "@bem-react/classname";
import './Burger.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBurger = cn('Burger');

const Burger: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBurger({}, [className])}>{children}</div>
);

export default Burger;