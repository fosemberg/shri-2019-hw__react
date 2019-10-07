import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Row.scss';

export const cnTableRow = cn('Table-Row');

const TableRow = ({className, children}) => (
  <div className={cnTableRow({}, [className])}>{children}</div>
);

export default TableRow;