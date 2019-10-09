import React from "react";
import TableHead from "../TableHead/TableHead";
import RepositoriesTableContent from "./-Content/RepositoriesTableContent";
import Table from "../../patterns/Table/Table";

const headerNames = [
  'name',
  '',
  '',
  '',
  ''
]

const RepositoriesTable = ({data}) => (
  <Table>
    <TableHead names={headerNames}/>
    <tbody>
    <RepositoriesTableContent data={data}/>
    </tbody>
  </Table>
);

export default RepositoriesTable;