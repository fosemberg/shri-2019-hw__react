import React from 'react';
import './Button.scss';

const Button = (props) => (
  <div className="Button">{props.children}</div>
);

export default Button;