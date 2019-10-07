import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Cell.scss';

export const cnTableCell = cn('Table-Cell');

const TableCell = ({className, children}) => (
  <td className={cnTableCell({}, [className])}>{children}</td>
);

export default TableCell;