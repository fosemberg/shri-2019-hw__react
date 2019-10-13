import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Info.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorInfo = cn('Editor-Info');

const EditorInfo: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorInfo({}, [className])}>{children}</div>
);

export default EditorInfo;