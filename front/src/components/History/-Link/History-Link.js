import React from 'react';
import {cn} from "@bem-react/classname";
import './History-Link.scss';

export const cnHistoryLink = cn('HistoryLink');

const HistoryLink = ({className, children}) => (
  <div className={cnHistoryLink({}, [className])}>{children}</div>
);

export default HistoryLink;