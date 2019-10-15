import React from 'react';
import './Editor-ByteCount.scss';
import { cnEditorByteCount, IEditorByteCount } from './index';

const EditorByteCount: React.FC<IEditorByteCount> = ({
  className,
  children,
}) => <div className={cnEditorByteCount({}, [className])}>{children}</div>;

export default EditorByteCount;
