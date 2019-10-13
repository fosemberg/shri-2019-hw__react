import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-HeaderItem.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorHeaderItem = cn('Editor-HeaderItem');

const EditorHeaderItem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorHeaderItem({}, [className])}>{children}</div>
);

export default EditorHeaderItem;