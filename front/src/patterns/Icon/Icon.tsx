import React from 'react';
import {cn} from "@bem-react/classname";
import './Icon.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnIcon = cn('Icon');

const Icon: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnIcon({}, [className])}>{children}</div>
);

export default Icon;