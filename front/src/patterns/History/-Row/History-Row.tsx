import React from 'react';
import './History-Row.scss';
import { cnHistoryRow, IHistoryRow } from './index';

const HistoryRow: React.FC<IHistoryRow> = ({ className, children }) => (
  <div className={cnHistoryRow({}, [className])}>{children}</div>
);

export default HistoryRow;
