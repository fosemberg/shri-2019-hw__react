import React from 'react';
import './Editor-Info.scss';
import { cnEditorInfo, IEditorInfo } from './index';

const EditorInfo: React.FC<IEditorInfo> = ({ className, children }) => (
  <div className={cnEditorInfo({}, [className])}>{children}</div>
);

export default EditorInfo;
