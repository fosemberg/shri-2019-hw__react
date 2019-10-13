import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface ISection extends IClassNameProps {
  indentB?: 'xxxxs' | 'm' | 'xxl' | 'xxxxl';
  indentT?: 'm' | 'xxxxs';
  spaceV?: 'xxl' | 'xxxxl';
}

export const cnSection = cn('Section');
