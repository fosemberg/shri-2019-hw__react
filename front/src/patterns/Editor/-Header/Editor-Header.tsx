import React from 'react';
import './Editor-Header.scss';
import { cnEditorHeader, IEditorHeader } from './index';

const EditorHeader: React.FC<IEditorHeader> = ({ className, children }) => (
  <div className={cnEditorHeader({}, [className])}>{children}</div>
);

export default EditorHeader;
