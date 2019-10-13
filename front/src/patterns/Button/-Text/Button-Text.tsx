import React from 'react';
import {cnButtonText, IButtonText} from "./index";
import './Button-Text.scss';

const ButtonText: React.FC<IButtonText> = ({className, children}) => (
  <div className={cnButtonText({}, [className])}>{children}</div>
);

export default ButtonText;