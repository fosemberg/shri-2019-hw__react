import React from 'react';
import './GitLogRow-Message.scss';
import { cnGitLogRowMessage, IGitLogRowMessage } from './index';

const GitLogRowMessage: React.FC<IGitLogRowMessage> = ({
  className,
  children,
}) => <div className={cnGitLogRowMessage({}, [className])}>{children}</div>;

export default GitLogRowMessage;
