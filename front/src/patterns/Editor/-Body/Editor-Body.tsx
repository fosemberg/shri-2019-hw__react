import React from 'react';
import {cn} from "@bem-react/classname";
import './Editor-Body.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnEditorBody = cn('Editor-Body');

const EditorBody: React.FC<IClassNameProps> = ({className, children}) => (
  <table className={cnEditorBody({}, [className])}>
    <tbody>
    {children}
    </tbody>
  </table>
);

export default EditorBody;