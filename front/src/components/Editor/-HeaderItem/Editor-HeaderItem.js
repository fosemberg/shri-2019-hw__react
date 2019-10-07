import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-HeaderItem.scss';

export const cnEditorHeaderItem = cn('EditorHeaderItem');

const EditorHeaderItem = ({className, children}) => (
  <div className={cnEditorHeaderItem({}, [className])}>{children}</div>
);

export default EditorHeaderItem;