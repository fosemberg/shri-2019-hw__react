import React from 'react';
import './Burger-Item.scss';

const BurgerItem = (props) => (
  <div className="Burger-Item">{props.children}</div>
);

export default BurgerItem;