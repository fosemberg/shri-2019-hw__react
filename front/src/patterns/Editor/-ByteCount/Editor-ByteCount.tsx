import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-ByteCount.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorByteCount = cn('Editor-ByteCount');

const EditorByteCount: React.FC<IClassNameProps> = ({className, children}) => (
  <span className={cnEditorByteCount({}, [className])}>{children}</span>
);

export default EditorByteCount;