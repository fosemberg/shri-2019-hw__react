import React from 'react';
import Table from '../../patterns/Table/Table';
import TableHead from '../TableHead/TableHead';
import RepositoriesTableContent from './-Content/RepositoriesTableContent';

interface IRepositoriesTable {
  data: string[];
}

const emptyCells = 4;

const headerNames: string[] = ['name', ...new Array(emptyCells).fill('')];

const RepositoriesTable: React.FC<IRepositoriesTable> = ({ data }) => (
  <Table>
    <TableHead names={headerNames} />
    <tbody>
      <RepositoriesTableContent data={data} emptyCells={emptyCells} />
    </tbody>
  </Table>
);

export default RepositoriesTable;
