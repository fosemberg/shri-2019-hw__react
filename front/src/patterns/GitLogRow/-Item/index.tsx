import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IGitLogRowItem extends IClassNameProps {
  padding?: 'both';
  display?: 'flex';
}

export const cnGitLogRowItem = cn('GitLogRow-Item');
