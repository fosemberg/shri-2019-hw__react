import { withBemMod } from '@bem-react/core';
import { IFile } from '../index';
import './File_type_file.scss';

export const FileTypeFile = withBemMod<IFile>('File', { type: 'file' });
