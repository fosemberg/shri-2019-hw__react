import React from 'react';
import './GitLogRow.scss';
import { cnGitLogRow, IGitLogRow } from './index';

const GitLogRow: React.FC<IGitLogRow> = ({ className, children }) => (
  <div className={cnGitLogRow({}, [className])}>{children}</div>
);

export default GitLogRow;
