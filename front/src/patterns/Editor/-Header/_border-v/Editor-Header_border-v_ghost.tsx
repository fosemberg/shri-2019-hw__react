import { withBemMod } from '@bem-react/core';
import { IEditorHeader } from '../index';
import './Editor-Header_border-v_ghost.scss';

export const EditorHeaderBorderVGhost = withBemMod<IEditorHeader>(
  'Editor-Header',
  { borderV: 'ghost' }
);
