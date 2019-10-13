import React from 'react';
import {cnBurgerItem, IBurgerItem} from "./index";
import './Burger-Item.scss';

const BurgerItem: React.FC<IBurgerItem> = ({className, children}) => (
  <div className={cnBurgerItem({}, [className])}>{children}</div>
);

export default BurgerItem;