import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-HeaderParagraph.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorHeaderParagraph = cn('Editor-HeaderParagraph');

const EditorHeaderParagraph: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorHeaderParagraph({}, [className])}>{children}</div>
);

export default EditorHeaderParagraph;