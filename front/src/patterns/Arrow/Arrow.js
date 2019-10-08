import React from 'react';
import {cn} from "@bem-react/classname";
import './Arrow.scss';
import {withBemMod} from "@bem-react/core";

export const cnArrow = cn('Arrow');

const Arrow = ({className, children}) => (
  <div className={cnArrow({}, [className])}>{children}</div>
);

export const mixArrow = withBemMod('Arrow');

export default Arrow;