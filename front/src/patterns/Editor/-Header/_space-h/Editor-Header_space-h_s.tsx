import { withBemMod } from '@bem-react/core';
import { IEditorHeader } from '../index';
import './Editor-Header_space-h_s.scss';

export const EditorHeaderSpaceHS = withBemMod<IEditorHeader>('Editor-Header', {
  spaceH: 's',
});
