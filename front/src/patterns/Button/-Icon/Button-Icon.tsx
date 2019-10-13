import React from 'react';
import {cn} from "@bem-react/classname";
import './Button-Icon.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnButtonIcon = cn('Button-Icon');

const ButtonIcon: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnButtonIcon({}, [className])}>{children}</div>
);

export default ButtonIcon;