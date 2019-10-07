import React from 'react';
import {cn} from "@bem-react/classname";
import './Burger-Item.scss';

export const cnBurgerItem = cn('BurgerItem');

const BurgerItem = ({className, children}) => (
  <div className={cnBurgerItem({}, [className])}>{children}</div>
);

export default BurgerItem;