import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-ByteCount.scss';

export const cnEditorByteCount = cn('Editor-ByteCount');

const EditorByteCount = ({className, children}) => (
  <div className={cnEditorByteCount({}, [className])}>{children}</div>
);

export default EditorByteCount;