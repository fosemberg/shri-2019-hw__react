import React from 'react';
import {cn} from "@bem-react/classname";
import './Button.scss';

export const cnButton = cn('Button');

const Button = ({className, children}) => (
  <div className={cnButton({}, [className])}>{children}</div>
);

export default Button;