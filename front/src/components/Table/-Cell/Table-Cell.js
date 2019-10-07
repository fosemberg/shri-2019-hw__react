import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Cell.scss';

export const cnTableCell = cn('Table-Cell');

const TableCell = ({className, children}) => (
  <div className={cnTableCell({}, [className])}>{children}</div>
);

export default TableCell;