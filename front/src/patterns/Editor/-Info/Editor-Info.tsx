import React from 'react';
import {cnEditorInfo, IEditorInfo} from "./index";
import './Editor-Info.scss';

const EditorInfo: React.FC<IEditorInfo> = ({className, children}) => (
  <div className={cnEditorInfo({}, [className])}>{children}</div>
);

export default EditorInfo;