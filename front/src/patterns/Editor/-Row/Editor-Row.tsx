import React from 'react';
import {cnEditorRow, IEditorRow} from "./index";
import './Editor-Row.scss';

const EditorRow: React.FC<IEditorRow> = ({className, children}) => (
  <tr className={cnEditorRow({}, [className])}>{children}</tr>
);

export default EditorRow;