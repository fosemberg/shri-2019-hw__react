import React from 'react';
import './Editor-Action.scss';
import { cnEditorAction, IEditorAction } from './index';

const EditorAction: React.FC<IEditorAction> = ({ className, children }) => (
  <div className={cnEditorAction({}, [className])}>{children}</div>
);

export default EditorAction;
