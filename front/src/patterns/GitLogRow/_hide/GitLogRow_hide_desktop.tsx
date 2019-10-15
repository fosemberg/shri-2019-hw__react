import { withBemMod } from '@bem-react/core';
import { IGitLogRow } from '../index';
import './GitLogRow_hide_desktop.scss';

export const GitLogRowHideDesktop = withBemMod<IGitLogRow>('GitLogRow', {
  hide: 'desktop',
});
