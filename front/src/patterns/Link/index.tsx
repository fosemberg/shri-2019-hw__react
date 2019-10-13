import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";
import {Url} from "../../utils/types";

export interface ILink extends IClassNameProps {
  href?: Url;
  color?: 'secondary';
  hide?: 'touch' | 'desktop';
}

export const cnLink = cn('Link');
