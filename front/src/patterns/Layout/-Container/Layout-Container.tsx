import React from 'react';
import {cn} from "@bem-react/classname";
import './Layout-Container.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnLayoutContainer = cn('Layout-Container');

const LayoutContainer: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnLayoutContainer({}, [className])}>{children}</div>
);

export default LayoutContainer;