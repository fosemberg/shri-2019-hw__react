import { withBemMod } from '@bem-react/core';
import { ILink } from '../index';
import './Link_hide_desktop.scss';

export const LinkHideDesktop = withBemMod<ILink>('Link', { hide: 'desktop' });
