import React from 'react';
import {cnTheme, ITheme} from "./index";
import './Theme.scss';

const Theme: React.FC<ITheme> = ({className, children}) => (
  <div className={cnTheme({}, [className])}>{children}</div>
);

export default Theme;