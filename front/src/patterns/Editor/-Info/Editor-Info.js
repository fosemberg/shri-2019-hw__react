import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Info.scss';

export const cnEditorInfo = cn('Editor-Info');

const EditorInfo = ({className, children}) => (
  <div className={cnEditorInfo({}, [className])}>{children}</div>
);

export default EditorInfo;