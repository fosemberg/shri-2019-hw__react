import React from 'react';
import {cn} from "@bem-react/classname";
import './History-Link.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnHistoryLink = cn('History-Link');

const HistoryLink: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnHistoryLink({}, [className])}>{children}</div>
);

export default HistoryLink;