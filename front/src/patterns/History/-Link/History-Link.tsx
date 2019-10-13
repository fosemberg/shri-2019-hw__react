import React from 'react';
import {cnHistoryLink, IHistoryLink} from "./index";
import './History-Link.scss';

const HistoryLink: React.FC<IHistoryLink> = ({className, children}) => (
  <div className={cnHistoryLink({}, [className])}>{children}</div>
);

export default HistoryLink;