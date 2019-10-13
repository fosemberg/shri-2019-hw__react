import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Item.scss';

export const cnEditorItem = cn('Editor-Item');

const EditorItem = ({className, children}) => (
  <div className={cnEditorItem({}, [className])}>{children}</div>
);

export default EditorItem;