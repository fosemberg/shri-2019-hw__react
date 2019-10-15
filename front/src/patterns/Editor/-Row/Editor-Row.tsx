import React from 'react';
import './Editor-Row.scss';
import { cnEditorRow, IEditorRow } from './index';

const EditorRow: React.FC<IEditorRow> = ({ className, children }) => (
  <tr className={cnEditorRow({}, [className])}>{children}</tr>
);

export default EditorRow;
