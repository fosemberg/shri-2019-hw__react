import React from 'react';
import {cn} from "@bem-react/classname";
import './Theme.scss';
import {ITheme} from "./index";

export const cnTheme = cn('Theme');

const Theme: React.FC<ITheme> = ({className, children}) => (
  <div className={cnTheme({}, [className])}>{children}</div>
);

export default Theme;