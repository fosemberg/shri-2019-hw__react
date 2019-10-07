import React from 'react';
import {cn} from "@bem-react/classname";
import './Table.scss';

export const cnTable = cn('Table');

const Table = ({className, children}) => (
  <table className={cnTable({}, [className])}>{children}</table>
);

export default Table;