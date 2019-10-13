import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditor = cn('Editor');

const Editor: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditor({}, [className])}>{children}</div>
);

export default Editor;