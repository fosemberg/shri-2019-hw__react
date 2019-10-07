import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Header.scss';

export const cnEditorHeader = cn('EditorHeader');

const EditorHeader = ({className, children}) => (
  <div className={cnEditorHeader({}, [className])}>{children}</div>
);

export default EditorHeader;