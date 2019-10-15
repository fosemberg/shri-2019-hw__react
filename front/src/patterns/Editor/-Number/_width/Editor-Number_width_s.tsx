import { withBemMod } from '@bem-react/core';
import { IEditorNumber } from '../index';
import './Editor-Number_width_s.scss';

export const EditorNumberWidthS = withBemMod<IEditorNumber>('Editor-Number', {
  width: 's',
});
