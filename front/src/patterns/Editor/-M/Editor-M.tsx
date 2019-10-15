import React from 'react';
import './Editor-M.scss';
import { cnEditorM, IEditorM } from './index';

const EditorM: React.FC<IEditorM> = ({ className, children }) => (
  <div className={cnEditorM({}, [className])}>{children}</div>
);

export default EditorM;
