import React from 'react';
import {cn} from "@bem-react/classname";
import './Layout.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnLayout = cn('Layout');

const Layout: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnLayout({}, [className])}>{children}</div>
);

export default Layout;