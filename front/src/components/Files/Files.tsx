import React from 'react';
import Table from '../../patterns/Table/Table';
import { IFile } from '../../utils/types';
import TableHead from '../TableHead/TableHead';
import FilesContent from './-Content/FilesContent';

interface IData {
  data: IFile[];
}

const headerNames: string[] = [
  'name',
  'Last commit',
  'Commit message',
  'Committer',
  'Updated',
];

const Files: React.FC<IData> = ({ data }) => (
  <Table>
    <TableHead names={headerNames} />
    <tbody>
      <FilesContent data={data} />
    </tbody>
  </Table>
);

export default Files;
