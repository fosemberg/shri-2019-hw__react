import { withBemMod } from '@bem-react/core';
import { IEditor } from '../index';
import './Editor_border_ghost.scss';

export const EditorBorderGhost = withBemMod<IEditor>('Editor', {
  border: 'ghost',
});
