import React from 'react';
import { cnLayoutContainer, ILayoutContainer } from './index';
import './Layout-Container.scss';

const LayoutContainer: React.FC<ILayoutContainer> = ({
  className,
  children,
}) => <div className={cnLayoutContainer({}, [className])}>{children}</div>;

export default LayoutContainer;
