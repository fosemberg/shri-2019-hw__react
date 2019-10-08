import React from 'react';
import {cn} from "@bem-react/classname";
import './History-Title.scss';

export const cnHistoryTitle = cn('History-Title');

const HistoryTitle = ({className, children}) => (
  <div className={cnHistoryTitle({}, [className])}>{children}</div>
);

export default HistoryTitle;