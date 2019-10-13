import React from 'react';
import {cnTableRow, ITableRow} from "./index";
import './Table-Row.scss';

const TableRow: React.FC<ITableRow> = ({className, children}) => (
  <tr className={cnTableRow({}, [className])}>{children}</tr>
);

export default TableRow;