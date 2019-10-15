import React from 'react';
import './Burger-Item.scss';
import { cnBurgerItem, IBurgerItem } from './index';

const BurgerItem: React.FC<IBurgerItem> = ({ className, children }) => (
  <div className={cnBurgerItem({}, [className])}>{children}</div>
);

export default BurgerItem;
