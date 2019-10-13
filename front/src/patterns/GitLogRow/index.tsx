import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IGitLogRow extends IClassNameProps {
  border?: 'bottom';
  padding?: 'both';
  hide?: 'desktop';
}

export const cnGitLogRow = cn('GitLogRow');
