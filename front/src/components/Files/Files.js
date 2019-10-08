import React from "react";
import TableRow from "../../patterns/Table/-Row/Table-Row";
import TableCell from "../../patterns/Table/-Cell/Table-Cell";
import {Link as RouterLink} from "react-router-dom";
import LinkBase from "../../patterns/Link/Link";
import {withRouter} from 'react-router-dom';
import {cnLink} from "../../patterns/Link/Link";
import "../../patterns/Link/Link.scss";
import {cnFile} from "../../patterns/File/File";
import "../../patterns/File/File.scss";
import "../../patterns/File/_type/File_type_branch.scss";
import "../../patterns/File/_type/File_type_dir.scss";
import "../../patterns/File/_type/File_type_file.scss";
import User from "../../patterns/User/User";

const dataMock = [
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "79d57a",
    "name": ".gitignore",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "2f3ca9",
    "name": "API.md",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "ddfd03",
    "name": "README.md",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "040000",
    "fileType": "dir",
    "lastCommit": "0fb9f0",
    "name": "README",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "3f287e",
    "name": "images.d.ts",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "1c360e",
    "name": "package.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "040000",
    "fileType": "dir",
    "lastCommit": "461e8d",
    "name": "public",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "040000",
    "fileType": "dir",
    "lastCommit": "e34870",
    "name": "src",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "7d74db",
    "name": "tsconfig.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "414421",
    "name": "tsconfig.prod.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "65ffdd",
    "name": "tsconfig.test.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "206b22",
    "name": "tslint.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "74373a",
    "name": "yarn.lock",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  }
]

const Files = withRouter(({location}) => {
  let {pathname} = location;
  console.log(pathname);
  pathname = pathname.slice(-1) === '/' ? pathname : pathname + '/';
  return <>
    {
      dataMock.map(
        ({
           fileType,
           name,
           lastCommit,
           commitMessage,
           committer,
           updated
         }, key) =>
          <TableRow key={key}>
            <TableCell>
              <RouterLink to={`${pathname}${name}`} className={cnFile({type: 'dir'}, [cnLink()])}>
                <div className="file__icon file__icon_type_${fileType}"></div>
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
});

export default Files;