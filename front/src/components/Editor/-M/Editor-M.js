import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-M.scss';

export const cnEditorM = cn('EditorM');

const EditorM = ({className, children}) => (
  <div className={cnEditorM({}, [className])}>{children}</div>
);

export default EditorM;