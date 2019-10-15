import React from 'react';
import './Burger.scss';
import { cnBurger, IBurger } from './index';

const Burger: React.FC<IBurger> = ({ className, children }) => (
  <div className={cnBurger({}, [className])}>{children}</div>
);

export default Burger;
