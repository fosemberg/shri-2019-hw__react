import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Body.scss';

export const cnEditorBody = cn('Editor-Body');

const EditorBody = ({className, children}) => (
  <div className={cnEditorBody({}, [className])}>{children}</div>
);

export default EditorBody;