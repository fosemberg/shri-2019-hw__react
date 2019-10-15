import React from 'react';
import './History-Title.scss';
import { cnHistoryTitle, IHistoryTitle } from './index';

const HistoryTitle: React.FC<IHistoryTitle> = ({ className, children }) => (
  <div className={cnHistoryTitle({}, [className])}>{children}</div>
);

export default HistoryTitle;
