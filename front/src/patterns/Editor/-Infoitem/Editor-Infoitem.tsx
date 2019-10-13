import React from 'react';
import {cnEditorInfoitem, IEditorInfoitem} from "./index";
import './Editor-Infoitem.scss';

const EditorInfoitem: React.FC<IEditorInfoitem> = ({className, children}) => (
  <div className={cnEditorInfoitem({}, [className])}>{children}</div>
);

export default EditorInfoitem;