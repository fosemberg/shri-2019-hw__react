import React from 'react';
import {cn} from "@bem-react/classname";
import './Arrow.scss';

export const cnArrow = cn('Arrow');

const Arrow = ({className, children}) => (
  <div className={cnArrow({}, [className])}>{children}</div>
);

export default Arrow;