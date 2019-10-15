import React from 'react';
import './Editor-Infoitem.scss';
import { cnEditorInfoitem, IEditorInfoitem } from './index';

const EditorInfoitem: React.FC<IEditorInfoitem> = ({ className, children }) => (
  <div className={cnEditorInfoitem({}, [className])}>{children}</div>
);

export default EditorInfoitem;
