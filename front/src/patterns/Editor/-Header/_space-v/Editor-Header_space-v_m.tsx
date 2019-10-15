import { withBemMod } from '@bem-react/core';
import { IEditorHeader } from '../index';
import './Editor-Header_space-v_m.scss';

export const EditorHeaderSpaceVM = withBemMod<IEditorHeader>('Editor-Header', {
  spaceV: 'm',
});
