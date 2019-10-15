import React from 'react';
import './Editor-Number.scss';
import { cnEditorNumber, IEditorNumber } from './index';

const EditorNumber: React.FC<IEditorNumber> = ({ className, children }) => (
  <td className={cnEditorNumber({}, [className])}>{children}</td>
);

export default EditorNumber;
