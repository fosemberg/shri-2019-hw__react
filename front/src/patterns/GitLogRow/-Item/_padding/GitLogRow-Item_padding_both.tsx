import { withBemMod } from '@bem-react/core';
import { IGitLogRowItem } from '../index';
import './GitLogRow-Item_padding_both.scss';

export const GitLogRowItemPaddingBoth = withBemMod<IGitLogRowItem>(
  'GitLogRow-Item',
  { padding: 'both' }
);
