import { withBemMod } from '@bem-react/core';
import { IEditorHeader } from '../index';
import './Editor-Header_color_default.scss';

export const EditorHeaderColorDefault = withBemMod<IEditorHeader>(
  'Editor-Header',
  { color: 'default' }
);
