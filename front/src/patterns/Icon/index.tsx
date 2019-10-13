import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IIcon extends IClassNameProps {
  type?: 'arrow-up' | 'code';
  size?: 'xs' | 's';
  indentR?: 'xxs';
}

export const cnIcon = cn('Icon');
