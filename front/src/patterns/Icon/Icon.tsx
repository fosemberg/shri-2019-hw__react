import React from 'react';
import './Icon.scss';
import { cnIcon, IIcon } from './index';

const Icon: React.FC<IIcon> = ({ className, children }) => (
  <div className={cnIcon({}, [className])}>{children}</div>
);

export default Icon;
