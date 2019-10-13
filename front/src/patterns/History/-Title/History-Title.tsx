import React from 'react';
import {cnHistoryTitle, IHistoryTitle} from "./index";
import './History-Title.scss';

const HistoryTitle: React.FC<IHistoryTitle> = ({className, children}) => (
  <div className={cnHistoryTitle({}, [className])}>{children}</div>
);

export default HistoryTitle;