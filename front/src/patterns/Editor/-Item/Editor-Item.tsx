import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Item.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorItem = cn('Editor-Item');

const EditorItem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorItem({}, [className])}>{children}</div>
);

export default EditorItem;