import React from 'react';
import {cn} from "@bem-react/classname";
import './Layout.scss';

export const cnLayout = cn('Layout');

const Layout = ({className, children}) => (
  <div className={cnLayout({}, [className])}>{children}</div>
);

export default Layout;