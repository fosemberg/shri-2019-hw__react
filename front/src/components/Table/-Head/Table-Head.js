import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Head.scss';

export const cnTableHead = cn('Table-Head');

const TableHead = ({className, children}) => (
  <thead className={cnTableHead({}, [className])}>{children}</thead>
);

export default TableHead;