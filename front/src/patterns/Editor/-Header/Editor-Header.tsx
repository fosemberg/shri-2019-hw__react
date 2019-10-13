import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Header.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorHeader = cn('Editor-Header');

const EditorHeader: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorHeader({}, [className])}>{children}</div>
);

export default EditorHeader;