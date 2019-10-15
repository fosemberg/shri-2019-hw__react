import React from 'react';
import './File.scss';
import { cnFile, IFile } from './index';

const File: React.FC<IFile> = ({ className, children }) => (
  <div className={cnFile({}, [className])}>{children}</div>
);

export default File;
