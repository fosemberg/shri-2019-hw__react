import React from 'react';
import {cnIcon, IIcon} from "./index";
import './Icon.scss';

const Icon: React.FC<IIcon> = ({className, children}) => (
  <div className={cnIcon({}, [className])}>{children}</div>
);

export default Icon;