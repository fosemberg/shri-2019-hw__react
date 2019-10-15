import React from 'react';
import './Editor-Line.scss';
import { cnEditorLine, IEditorLine } from './index';

const EditorLine: React.FC<IEditorLine> = ({ className, children }) => (
  <td className={cnEditorLine({}, [className])}>{children}</td>
);

export default EditorLine;
