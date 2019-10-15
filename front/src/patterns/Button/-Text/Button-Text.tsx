import React from 'react';
import './Button-Text.scss';
import { cnButtonText, IButtonText } from './index';

const ButtonText: React.FC<IButtonText> = ({ className, children }) => (
  <div className={cnButtonText({}, [className])}>{children}</div>
);

export default ButtonText;
