import { withBemMod } from '@bem-react/core';
import { IFileIcon } from '../index';
import './File-Icon_type_dir.scss';

export const FileIconTypeDir = withBemMod<IFileIcon>('File-Icon', {
  type: 'dir',
});
