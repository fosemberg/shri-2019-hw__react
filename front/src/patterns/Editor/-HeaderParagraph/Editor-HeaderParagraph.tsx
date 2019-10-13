import React from 'react';
import {cnEditorHeaderParagraph, IEditorHeaderParagraph} from "./index";
import './Editor-HeaderParagraph.scss';

const EditorHeaderParagraph: React.FC<IEditorHeaderParagraph> = ({className, children}) => (
  <div className={cnEditorHeaderParagraph({}, [className])}>{children}</div>
);

export default EditorHeaderParagraph;