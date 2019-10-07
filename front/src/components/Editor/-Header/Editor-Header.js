import React from 'react';
import './Editor-Header.scss';

const EditorHeader = (props) => (
  <div className="Editor-Header">{props.children}</div>
);

export default EditorHeader;