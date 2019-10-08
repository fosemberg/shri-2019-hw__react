import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Row.scss';

export const cnEditorRow = cn('Editor-Row');

const EditorRow = ({className, children}) => (
  <tr className={cnEditorRow({}, [className])}>{children}</tr>
);

export default EditorRow;