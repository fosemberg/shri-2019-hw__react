import React from 'react';
import {cn} from "@bem-react/classname";
import './Button-Icon.scss';

export const cnButtonIcon = cn('ButtonIcon');

const ButtonIcon = ({className, children}) => (
  <div className={cnButtonIcon({}, [className])}>{children}</div>
);

export default ButtonIcon;