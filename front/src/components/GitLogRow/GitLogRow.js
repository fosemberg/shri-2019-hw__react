import React from 'react';
import {cn} from "@bem-react/classname";
import './GitLogRow.scss';

export const cnGitLogRow = cn('GitLogRow');

const GitLogRow = ({className, children}) => (
  <div className={cnGitLogRow({}, [className])}>{children}</div>
);

export default GitLogRow;