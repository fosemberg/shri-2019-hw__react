import React from 'react';
import './GitLogRow-Arrow.scss';
import { cnGitLogRowArrow, IGitLogRowArrow } from './index';

const GitLogRowArrow: React.FC<IGitLogRowArrow> = ({ className, children }) => (
  <div className={cnGitLogRowArrow({}, [className])}>{children}</div>
);

export default GitLogRowArrow;
