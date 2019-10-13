import React from 'react';
import {cnEditorNumber, IEditorNumber} from "./index";
import './Editor-Number.scss';

const EditorNumber: React.FC<IEditorNumber> = ({className, children}) => (
  <td className={cnEditorNumber({}, [className])}>{children}</td>
);

export default EditorNumber;