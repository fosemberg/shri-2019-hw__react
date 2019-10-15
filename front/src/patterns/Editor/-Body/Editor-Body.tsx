import React from 'react';
import './Editor-Body.scss';
import { cnEditorBody, IEditorBody } from './index';

const EditorBody: React.FC<IEditorBody> = ({ className, children }) => (
  <table className={cnEditorBody({}, [className])}>
    <tbody>{children}</tbody>
  </table>
);

export default EditorBody;
