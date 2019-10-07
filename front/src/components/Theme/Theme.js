import React from 'react';
import './Theme.scss';
import {cn} from "@bem-react/classname";

export const cnTheme = cn('Theme');

const Theme = ({className, children}) => (
  <div className={cnTheme({}, [className])}>{children}</div>
);

export default Theme;