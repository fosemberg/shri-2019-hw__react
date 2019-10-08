import React from 'react';
import {cn} from "@bem-react/classname";
import './Theme.scss';

export const cnTheme = cn('Theme');

const Theme = ({className, children}) => (
  <div className={cnTheme({}, [className])}>{children}</div>
);

export default Theme;