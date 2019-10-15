import { withBemMod } from '@bem-react/core';
import { IFile } from '../index';
import './File_type_dir.scss';

export const FileTypeDir = withBemMod<IFile>('File', { type: 'dir' });
