import { withBemMod } from '@bem-react/core';
import { IGitLogRow } from '../index';
import './GitLogRow_border_bottom.scss';

export const GitLogRowBorderBottom = withBemMod<IGitLogRow>('GitLogRow', {
  border: 'bottom',
});
