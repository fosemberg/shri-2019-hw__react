import React from 'react';
import {cnEditorAction, IEditorAction} from "./index";
import './Editor-Action.scss';

const EditorAction: React.FC<IEditorAction> = ({className, children}) => (
  <div className={cnEditorAction({}, [className])}>{children}</div>
);

export default EditorAction;