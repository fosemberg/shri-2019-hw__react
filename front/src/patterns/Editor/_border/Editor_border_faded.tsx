import { withBemMod } from '@bem-react/core';
import { IEditor } from '../index';
import './Editor_border_faded.scss';

export const EditorBorderFaded = withBemMod<IEditor>('Editor', {
  border: 'faded',
});
