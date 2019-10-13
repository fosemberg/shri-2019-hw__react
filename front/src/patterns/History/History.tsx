import React from 'react';
import {cn} from "@bem-react/classname";
import './History.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnHistory = cn('History');

const History: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnHistory({}, [className])}>{children}</div>
);

export default History;