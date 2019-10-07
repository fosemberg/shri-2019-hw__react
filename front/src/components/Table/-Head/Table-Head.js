import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Head.scss';

export const cnTableHead = cn('TableHead');

const TableHead = ({className, children}) => (
  <div className={cnTableHead({}, [className])}>{children}</div>
);

export default TableHead;