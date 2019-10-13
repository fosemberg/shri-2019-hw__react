import React from 'react';
import {cnFile, IFile} from "./index";
import './File.scss';

const File: React.FC<IFile> = ({className, children}) => (
  <div className={cnFile({}, [className])}>{children}</div>
);

export default File;