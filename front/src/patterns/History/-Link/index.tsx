import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IHistoryLink extends IClassNameProps {
  hide?: 'desktop';
}

export const cnHistoryLink = cn('History-Link');
