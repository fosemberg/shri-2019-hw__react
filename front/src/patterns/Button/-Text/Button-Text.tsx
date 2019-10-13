import React from 'react';
import {cn} from "@bem-react/classname";
import './Button-Text.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnButtonText = cn('Button-Text');

const ButtonText: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnButtonText({}, [className])}>{children}</div>
);

export default ButtonText;