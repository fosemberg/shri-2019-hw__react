import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Number.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorNumber = cn('Editor-Number');

const EditorNumber: React.FC<IClassNameProps> = ({className, children}) => (
  <td className={cnEditorNumber({}, [className])}>{children}</td>
);

export default EditorNumber;