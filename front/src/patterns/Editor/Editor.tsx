import React from 'react';
import './Editor.scss';
import { cnEditor, IEditor } from './index';

const Editor: React.FC<IEditor> = ({ className, children }) => (
  <div className={cnEditor({}, [className])}>{children}</div>
);

export default Editor;
