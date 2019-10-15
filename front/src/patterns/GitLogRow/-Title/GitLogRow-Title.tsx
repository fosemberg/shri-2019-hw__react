import React from 'react';
import './GitLogRow-Title.scss';
import { cnGitLogRowTitle, IGitLogRowTitle } from './index';

const GitLogRowTitle: React.FC<IGitLogRowTitle> = ({ className, children }) => (
  <div className={cnGitLogRowTitle({}, [className])}>{children}</div>
);

export default GitLogRowTitle;
