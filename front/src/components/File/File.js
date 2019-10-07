import React from 'react';
import {cn} from "@bem-react/classname";
import './File.scss';

export const cnFile = cn('File');

const File = ({className, children}) => (
  <div className={cnFile({}, [className])}>{children}</div>
);

export default File;