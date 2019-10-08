import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Infoitem.scss';

export const cnEditorInfoitem = cn('Editor-Infoitem');

const EditorInfoitem = ({className, children}) => (
  <div className={cnEditorInfoitem({}, [className])}>{children}</div>
);

export default EditorInfoitem;