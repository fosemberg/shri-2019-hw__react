import React from 'react';
import {cn} from "@bem-react/classname";
import './Layout-Container.scss';

export const cnLayoutContainer = cn('Layout-Container');

const LayoutContainer = ({className, children}) => (
  <div className={cnLayoutContainer({}, [className])}>{children}</div>
);

export default LayoutContainer;