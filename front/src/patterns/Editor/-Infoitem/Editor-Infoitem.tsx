import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Infoitem.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorInfoitem = cn('Editor-Infoitem');

const EditorInfoitem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorInfoitem({}, [className])}>{children}</div>
);

export default EditorInfoitem;