import React from 'react';
import {cnEditorItem, IEditorItem} from "./index";
import './Editor-Item.scss';

const EditorItem: React.FC<IEditorItem> = ({className, children}) => (
  <div className={cnEditorItem({}, [className])}>{children}</div>
);

export default EditorItem;