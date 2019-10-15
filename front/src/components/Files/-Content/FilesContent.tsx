import { compose } from '@bem-react/core';
import React, { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cnFile } from '../../../patterns/File';
import { FileIconTypeDir } from '../../../patterns/File/-Icon/_type/File-Icon_type_dir';
import { FileIconTypeFile } from '../../../patterns/File/-Icon/_type/File-Icon_type_file';
import { FileIconTypeReadme } from '../../../patterns/File/-Icon/_type/File-Icon_type_readme';
import FileIconBase from '../../../patterns/File/-Icon/File-Icon';
import '../../../patterns/File/_type/File_type_branch.scss';
import '../../../patterns/File/_type/File_type_dir.scss';
import '../../../patterns/File/_type/File_type_file.scss';
import '../../../patterns/File/File.scss';
import { cnLink } from '../../../patterns/Link';
import LinkBase from '../../../patterns/Link/Link';
import '../../../patterns/Link/Link.scss';
import TableCell from '../../../patterns/Table/-Cell/Table-Cell';
import TableRow from '../../../patterns/Table/-Row/Table-Row';
import User from '../../../patterns/User/User';
import { usePathname } from '../../../utils/helpers';
import { IFile } from '../../../utils/types';

interface IFilesContent {
  data: IFile[];
}

const FileIcon = compose(
  FileIconTypeFile,
  FileIconTypeDir,
  FileIconTypeReadme
)(FileIconBase);

const FilesContent: React.FC<IFilesContent> = ({ data }) => {
  const pathname = usePathname();
  return (
    <>
      {data.map(
        ({ fileType, name, lastCommit, commitMessage, committer, updated }) => (
          <TableRow key={name}>
            <TableCell>
              <RouterLink
                to={`${pathname}${name}`}
                className={cnFile({ type: 'dir' }, [cnLink()])}
              >
                <FileIcon type={fileType} />
                {name}
              </RouterLink>
            </TableCell>
            <TableCell>
              <LinkBase>{lastCommit}</LinkBase>
            </TableCell>
            <TableCell>{commitMessage}</TableCell>
            <TableCell>
              <User>{committer}</User>
            </TableCell>
            <TableCell>{updated}</TableCell>
          </TableRow>
        )
      )}
    </>
  );
};

export default memo(FilesContent);
