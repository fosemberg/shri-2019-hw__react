import React, { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cnFile } from '../../../patterns/File';
import '../../../patterns/File/_type/File_type_branch.scss';
import '../../../patterns/File/_type/File_type_dir.scss';
import '../../../patterns/File/_type/File_type_file.scss';
import '../../../patterns/File/File.scss';
import { cnLink } from '../../../patterns/Link';
import '../../../patterns/Link/Link.scss';
import TableCell from '../../../patterns/Table/-Cell/Table-Cell';
import TableRow from '../../../patterns/Table/-Row/Table-Row';
import { usePathname } from '../../../utils/helpers';

interface IRepositoriesTableContent {
  data: string[];
  emptyCells: number;
}

const RepositoriesTableContent: React.FC<IRepositoriesTableContent> = ({
  data,
  emptyCells,
}) => {
  const pathname = usePathname();
  return (
    <>
      {data.map((name) => (
        <TableRow key={name}>
          <TableCell>
            <RouterLink
              to={`${pathname}${name}`}
              className={cnFile({ type: 'dir' }, [cnLink()])}
            >
              {name}
            </RouterLink>
          </TableCell>
          <TableCell colSpan={emptyCells} />
        </TableRow>
      ))}
    </>
  );
};

export default memo(RepositoriesTableContent);
