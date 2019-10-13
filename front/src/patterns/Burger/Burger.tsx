import React from 'react';
import {cnBurger, IBurger} from "./index";
import './Burger.scss';

const Burger: React.FC<IBurger> = ({className, children}) => (
  <div className={cnBurger({}, [className])}>{children}</div>
);

export default Burger;