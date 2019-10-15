import React from 'react';
import { cnLayout, ILayout } from './index';
import './Layout.scss';

const Layout: React.FC<ILayout> = ({ className, children }) => (
  <div className={cnLayout({}, [className])}>{children}</div>
);

export default Layout;
