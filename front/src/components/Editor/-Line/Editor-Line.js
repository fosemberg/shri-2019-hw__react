import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Line.scss';

export const cnEditorLine = cn('Editor-Line');

const EditorLine = ({className, children}) => (
  <div className={cnEditorLine({}, [className])}>{children}</div>
);

export default EditorLine;