import React from 'react';
import './Editor-Item.scss';
import { cnEditorItem, IEditorItem } from './index';

const EditorItem: React.FC<IEditorItem> = ({ className, children }) => (
  <div className={cnEditorItem({}, [className])}>{children}</div>
);

export default EditorItem;
