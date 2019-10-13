import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Row.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorRow = cn('Editor-Row');

const EditorRow: React.FC<IClassNameProps> = ({className, children}) => (
  <tr className={cnEditorRow({}, [className])}>{children}</tr>
);

export default EditorRow;