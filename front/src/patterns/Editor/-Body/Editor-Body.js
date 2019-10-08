import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Body.scss';

export const cnEditorBody = cn('Editor-Body');

const EditorBody = ({className, children}) => (
  <table className={cnEditorBody({}, [className])}>{children}</table>
);

export default EditorBody;