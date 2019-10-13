import React from 'react';
import {cnEditorHeader, IEditorHeader} from "./index";
import './Editor-Header.scss';

const EditorHeader: React.FC<IEditorHeader> = ({className, children}) => (
  <div className={cnEditorHeader({}, [className])}>{children}</div>
);

export default EditorHeader;