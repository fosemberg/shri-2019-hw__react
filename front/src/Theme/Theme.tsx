import React from 'react';
import {cn} from "@bem-react/classname";
import './Theme.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnTheme = cn('Theme');

const Theme: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnTheme({}, [className])}>{children}</div>
);

export default Theme;