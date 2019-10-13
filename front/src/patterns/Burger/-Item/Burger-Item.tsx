import React from 'react';
import {cn} from "@bem-react/classname";
import './Burger-Item.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnBurgerItem = cn('Burger-Item');

const BurgerItem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnBurgerItem({}, [className])}>{children}</div>
);

export default BurgerItem;