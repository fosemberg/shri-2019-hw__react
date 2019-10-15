import { withBemMod } from '@bem-react/core';
import { IEditorHeader } from '../index';
import './Editor-Header_space-h_m.scss';

export const EditorHeaderSpaceHM = withBemMod<IEditorHeader>('Editor-Header', {
  spaceH: 'm',
});
