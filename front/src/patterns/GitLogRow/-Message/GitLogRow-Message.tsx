import React from 'react';
import {cnGitLogRowMessage, IGitLogRowMessage} from "./index";
import './GitLogRow-Message.scss';

const GitLogRowMessage: React.FC<IGitLogRowMessage> = ({className, children}) => (
  <div className={cnGitLogRowMessage({}, [className])}>{children}</div>
);

export default GitLogRowMessage;