import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Number.scss';

export const cnEditorNumber = cn('Editor-Number');

const EditorNumber = ({className, children}) => (
  <div className={cnEditorNumber({}, [className])}>{children}</div>
);

export default EditorNumber;