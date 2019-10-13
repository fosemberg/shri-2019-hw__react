import React from 'react';
import {cnGitLogRowTitle, IGitLogRowTitle} from "./index";
import './GitLogRow-Title.scss';

const GitLogRowTitle: React.FC<IGitLogRowTitle> = ({className, children}) => (
  <div className={cnGitLogRowTitle({}, [className])}>{children}</div>
);

export default GitLogRowTitle;