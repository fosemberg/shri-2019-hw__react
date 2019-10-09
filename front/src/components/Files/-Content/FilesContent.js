import React, {memo} from "react";
import TableRow from "../../../patterns/Table/-Row/Table-Row";
import TableCell from "../../../patterns/Table/-Cell/Table-Cell";
import {Link as RouterLink}
from "react-router-dom";
import LinkBase from "../../../patterns/Link/Link";
import {cnLink} from "../../../patterns/Link/Link";
import "../../../patterns/Link/Link.scss";
import {cnFile} from "../../../patterns/File/File";
import "../../../patterns/File/File.scss";
import "../../../patterns/File/_type/File_type_branch.scss";
import "../../../patterns/File/_type/File_type_dir.scss";
import "../../../patterns/File/_type/File_type_file.scss";
import User from "../../../patterns/User/User";
import {usePathname} from "../../../utils/helpers";
import FileIconBase from "../../../patterns/File/-Icon/File-Icon";
import {compose} from "@bem-react/core";
import {FileIconTypeFile} from "../../../patterns/File/-Icon/_type/File-Icon_type_file";
import {FileIconTypeDir} from "../../../patterns/File/-Icon/_type/File-Icon_type_dir";
import {FileIconTypeReadme} from "../../../patterns/File/-Icon/_type/File-Icon_type_readme";

const FileIcon = compose(
  FileIconTypeFile,
  FileIconTypeDir,
  FileIconTypeReadme,
)(FileIconBase);

const FilesContent = ({data}) => {
  const pathname = usePathname();
  return <>
    {
      data.map(
        ({
           fileType,
           name,
           lastCommit,
           commitMessage,
           committer,
           updated
         }) =>
          <TableRow key={name}>
            <TableCell>
              <RouterLink
                to={`${pathname}${name}`}
                className={cnFile({type: 'dir'}, [cnLink()])}
              >
                <FileIcon type={fileType}/>
                {name}
              </RouterLink>
            </TableCell>
            <TableCell>
              <LinkBase>
                {lastCommit}
              </LinkBase>
            </TableCell>
            <TableCell>{commitMessage}</TableCell>
            <TableCell><User>{committer}</User></TableCell>
            <TableCell>{updated}</TableCell>
          </TableRow>
      )
    }
  </>
};

export default memo(FilesContent);