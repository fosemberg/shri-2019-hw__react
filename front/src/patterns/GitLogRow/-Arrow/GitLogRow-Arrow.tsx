import React from 'react';
import {cnGitLogRowArrow, IGitLogRowArrow} from "./index";
import './GitLogRow-Arrow.scss';

const GitLogRowArrow: React.FC<IGitLogRowArrow> = ({className, children}) => (
  <div className={cnGitLogRowArrow({}, [className])}>{children}</div>
);

export default GitLogRowArrow;