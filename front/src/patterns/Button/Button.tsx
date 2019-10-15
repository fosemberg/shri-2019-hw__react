import React from 'react';
import './Button.scss';
import { cnButton, IButton } from './index';

const Button: React.FC<IButton> = ({ className, children }) => (
  <div className={cnButton({}, [className])}>{children}</div>
);

export default Button;
