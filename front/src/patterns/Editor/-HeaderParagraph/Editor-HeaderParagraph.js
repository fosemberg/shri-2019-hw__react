import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-HeaderParagraph.scss';

export const cnEditorHeaderParagraph = cn('Editor-HeaderParagraph');

const EditorHeaderParagraph = ({className, children}) => (
  <div className={cnEditorHeaderParagraph({}, [className])}>{children}</div>
);

export default EditorHeaderParagraph;