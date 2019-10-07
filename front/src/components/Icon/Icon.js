import React from 'react';
import {cn} from "@bem-react/classname";
import './Icon.scss';

export const cnIcon = cn('Icon');

const Icon = ({className, children}) => (
  <div className={cnIcon({}, [className])}>{children}</div>
);

export default Icon;