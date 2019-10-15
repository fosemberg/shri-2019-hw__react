import React from 'react';
import './Editor-HeaderParagraph.scss';
import { cnEditorHeaderParagraph, IEditorHeaderParagraph } from './index';

const EditorHeaderParagraph: React.FC<IEditorHeaderParagraph> = ({
  className,
  children,
}) => (
  <div className={cnEditorHeaderParagraph({}, [className])}>{children}</div>
);

export default EditorHeaderParagraph;
