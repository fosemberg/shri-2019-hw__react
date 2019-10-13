import React from 'react';
import {cn} from "@bem-react/classname";
import './Button.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnButton = cn('Button');

const Button: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnButton({}, [className])}>{children}</div>
);

export default Button;