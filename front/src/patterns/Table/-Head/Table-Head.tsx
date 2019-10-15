import React from 'react';
import { cnTableHead, ITableHead } from './index';
import './Table-Head.scss';

const TableHead: React.FC<ITableHead> = ({ className, children }) => (
  <thead className={cnTableHead({}, [className])}>{children}</thead>
);

export default TableHead;
