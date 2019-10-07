import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Row.scss';

export const cnEditorRow = cn('EditorRow');

const EditorRow = ({className, children}) => (
  <div className={cnEditorRow({}, [className])}>{children}</div>
);

export default EditorRow;