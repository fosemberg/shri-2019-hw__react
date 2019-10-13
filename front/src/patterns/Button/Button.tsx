import React from 'react';
import {cnButton, IButton} from "./index";
import './Button.scss';

const Button: React.FC<IButton> = ({className, children}) => (
  <div className={cnButton({}, [className])}>{children}</div>
);

export default Button;