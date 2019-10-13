import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Action.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorAction = cn('Editor-Action');

const EditorAction: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnEditorAction({}, [className])}>{children}</div>
);

export default EditorAction;