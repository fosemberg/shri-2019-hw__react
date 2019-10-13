import React from 'react';
import {cn} from "@bem-react/classname";
import './History.scss';

export const cnHistory = cn('History');

const History = ({className, children}) => (
  <div className={cnHistory({}, [className])}>{children}</div>
);

export default History;