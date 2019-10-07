import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Action.scss';

export const cnEditorAction = cn('EditorAction');

const EditorAction = ({className, children}) => (
  <div className={cnEditorAction({}, [className])}>{children}</div>
);

export default EditorAction;