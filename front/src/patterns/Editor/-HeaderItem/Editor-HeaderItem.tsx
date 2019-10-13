import React from 'react';
import {cnEditorHeaderItem, IEditorHeaderItem} from "./index";
import './Editor-HeaderItem.scss';

const EditorHeaderItem: React.FC<IEditorHeaderItem> = ({className, children}) => (
  <div className={cnEditorHeaderItem({}, [className])}>{children}</div>
);

export default EditorHeaderItem;