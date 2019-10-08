import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor.scss';

export const cnEditor = cn('Editor');

const Editor = ({className, children}) => (
  <div className={cnEditor({}, [className])}>{children}</div>
);

export default Editor;