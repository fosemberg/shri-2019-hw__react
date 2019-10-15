import { withBemMod } from '@bem-react/core';
import { IEditorNumber } from '../index';
import './Editor-Number_space-l_touch.scss';

export const EditorNumberSpaceLTouch = withBemMod<IEditorNumber>(
  'Editor-Number',
  { spaceL: 'touch' }
);
