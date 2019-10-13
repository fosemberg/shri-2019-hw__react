import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-M.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorM = cn('Editor-M');

const EditorM: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorM({}, [className])}>{children}</div>
);

export default EditorM;