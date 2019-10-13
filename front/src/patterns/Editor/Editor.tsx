import React from 'react';
import {cnEditor, IEditor} from "./index";
import './Editor.scss';

const Editor: React.FC<IEditor> = ({className, children}) => (
  <div className={cnEditor({}, [className])}>{children}</div>
);

export default Editor;