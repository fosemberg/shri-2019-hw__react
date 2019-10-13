import React from 'react';
import {cnEditorM, IEditorM} from "./index";
import './Editor-M.scss';

const EditorM: React.FC<IEditorM> = ({className, children}) => (
  <div className={cnEditorM({}, [className])}>{children}</div>
);

export default EditorM;