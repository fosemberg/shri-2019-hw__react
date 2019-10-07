import React from 'react';
import {cn} from "@bem-react/classname";
import './Button-Text.scss';

export const cnButtonText = cn('ButtonText');

const ButtonText = ({className, children}) => (
  <div className={cnButtonText({}, [className])}>{children}</div>
);

export default ButtonText;