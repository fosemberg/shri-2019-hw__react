import React from 'react';
import {cn} from "@bem-react/classname";
import './Arrow.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnArrow = cn('Arrow');

const Arrow: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnArrow({}, [className])}>{children}</div>
);

export default Arrow;