import React from 'react';
import './Button-Icon.scss';
import { cnButtonIcon, IButtonIcon } from './index';

const ButtonIcon: React.FC<IButtonIcon> = ({ className, children }) => (
  <div className={cnButtonIcon({}, [className])}>{children}</div>
);

export default ButtonIcon;
