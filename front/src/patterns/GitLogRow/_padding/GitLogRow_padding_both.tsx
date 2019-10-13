import { withBemMod } from '@bem-react/core';
import {IGitLogRow} from "../index";
import './GitLogRow_padding_both.scss';

export const GitLogRowPaddingBoth = withBemMod<IGitLogRow>('GitLogRow', { padding: 'both'});