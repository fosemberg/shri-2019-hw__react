import React from 'react';
import {cn} from "@bem-react/classname";
import './History-Title.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnHistoryTitle = cn('History-Title');

const HistoryTitle: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnHistoryTitle({}, [className])}>{children}</div>
);

export default HistoryTitle;