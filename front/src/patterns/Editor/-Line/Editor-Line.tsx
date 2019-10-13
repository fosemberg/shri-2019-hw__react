import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Line.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorLine = cn('Editor-Line');

const EditorLine: React.FC<IClassNameProps> = ({className, children}) => (
  <td className={cnEditorLine({}, [className])}>{children}</td>
);

export default EditorLine;