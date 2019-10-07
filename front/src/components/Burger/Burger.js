import React from 'react';
import './Burger.scss';

const Burger = (props) => (
  <div className="Burger">{props.children}</div>
);

export default Burger;