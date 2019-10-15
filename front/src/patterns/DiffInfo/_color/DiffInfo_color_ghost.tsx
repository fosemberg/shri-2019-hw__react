import { withBemMod } from '@bem-react/core';
import { IDiffInfo } from '../index';
import './DiffInfo_color_ghost.scss';

export const DiffInfoColorGhost = withBemMod<IDiffInfo>('DiffInfo', {
  color: 'ghost',
});
