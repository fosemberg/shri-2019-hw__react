import { withBemMod } from '@bem-react/core';
import { IEditorBody } from '../index';
import './Editor-Body_border_collapse.scss';

export const EditorBodyBorderCollapse = withBemMod<IEditorBody>('Editor-Body', {
  border: 'collapse',
});
