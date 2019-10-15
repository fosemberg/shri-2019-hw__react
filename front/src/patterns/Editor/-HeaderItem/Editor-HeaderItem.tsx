import React from 'react';
import './Editor-HeaderItem.scss';
import { cnEditorHeaderItem, IEditorHeaderItem } from './index';

const EditorHeaderItem: React.FC<IEditorHeaderItem> = ({
  className,
  children,
}) => <div className={cnEditorHeaderItem({}, [className])}>{children}</div>;

export default EditorHeaderItem;
