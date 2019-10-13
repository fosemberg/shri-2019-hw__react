import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Row.scss';

export const cnTableRow = cn('Table-Row');

const TableRow = ({className, children}) => (
  <tr className={cnTableRow({}, [className])}>{children}</tr>
);

export default TableRow;