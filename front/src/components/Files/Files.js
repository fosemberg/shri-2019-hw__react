import React from "react";
import TableHead from "../TableHead/TableHead";
import FilesContent from "./-Content/FilesContent";
import Table from "../../patterns/Table/Table";

const headerNames = [
  'name',
  'Last commit',
  'Commit message',
  'Committer',
  'Updated'
]

const Files = ({data}) => (
  <Table>
    <TableHead names={headerNames}/>
    <tbody>
    <FilesContent data={data}/>
    </tbody>
  </Table>
);

export default Files;