import React from 'react';
import {cnEditorByteCount, IEditorByteCount} from "./index";
import './Editor-ByteCount.scss';

const EditorByteCount: React.FC<IEditorByteCount> = ({className, children}) => (
  <div className={cnEditorByteCount({}, [className])}>{children}</div>
);

export default EditorByteCount;