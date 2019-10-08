import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Cell.scss';

export const cnTableCell = cn('Table-Cell');

const TableCell = ({className, children, colSpan}) => (
  <td colSpan={colSpan} className={cnTableCell({}, [className])}>{children}</td>
);

export default TableCell;