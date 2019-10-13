import React from 'react';
import {cnEditorLine, IEditorLine} from "./index";
import './Editor-Line.scss';

const EditorLine: React.FC<IEditorLine> = ({className, children}) => (
  <td className={cnEditorLine({}, [className])}>{children}</td>
);

export default EditorLine;