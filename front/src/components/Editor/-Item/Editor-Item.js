import React from 'react';
import './Editor-Item.scss';

const EditorItem = (props) => (
  <div className="Editor-Item">{props.children}</div>
);

export default EditorItem;