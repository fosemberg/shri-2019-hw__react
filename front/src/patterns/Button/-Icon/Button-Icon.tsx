import React from 'react';
import {cnButtonIcon, IButtonIcon} from "./index";
import './Button-Icon.scss';

const ButtonIcon: React.FC<IButtonIcon> = ({className, children}) => (
  <div className={cnButtonIcon({}, [className])}>{children}</div>
);

export default ButtonIcon;