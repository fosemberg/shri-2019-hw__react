import React from 'react';
import {cnHistoryRow, IHistoryRow} from "./index";
import './History-Row.scss';

const HistoryRow: React.FC<IHistoryRow> = ({className, children}) => (
  <div className={cnHistoryRow({}, [className])}>{children}</div>
);

export default HistoryRow;