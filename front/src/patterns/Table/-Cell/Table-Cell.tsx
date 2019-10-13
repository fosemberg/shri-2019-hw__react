import React from 'react';
import {cnTableCell, ITableCell} from "./index";
import './Table-Cell.scss';

const TableCell: React.FC<ITableCell> = ({className, children, colSpan = 1}) => (
  <td colSpan={colSpan} className={cnTableCell({}, [className])}>{children}</td>
);

export default TableCell;