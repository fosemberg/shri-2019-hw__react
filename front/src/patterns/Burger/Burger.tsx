import React from 'react';
import {cn} from "@bem-react/classname";
import './Burger.scss';

export const cnBurger = cn('Burger');

const Burger = ({className, children}) => (
  <div className={cnBurger({}, [className])}>{children}</div>
);

export default Burger;