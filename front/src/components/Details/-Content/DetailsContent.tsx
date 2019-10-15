import { compose } from '@bem-react/core';
import React from 'react';
import { EditorBodyColorMain } from '../../../patterns/Editor/-Body/_color/Editor-Body_color_main';
import EditorBodyBase from '../../../patterns/Editor/-Body/Editor-Body';
import EditorLine from '../../../patterns/Editor/-Line/Editor-Line';
import EditorNumber from '../../../patterns/Editor/-Number/Editor-Number';
import EditorRow from '../../../patterns/Editor/-Row/Editor-Row';

interface IDetailsContent {
  data: string;
}

const EditorBody = compose(EditorBodyColorMain)(EditorBodyBase);

const DetailsContent: React.FC<IDetailsContent> = ({ data }) => (
  <EditorBody color={'main'}>
    {typeof data === 'string' ? (
      data.split('\n').map((stroke, key) => (
        <EditorRow key={key}>
          <EditorNumber>{key + 1}</EditorNumber>
          <EditorLine>{stroke.replace(/ /g, '\u00a0')}</EditorLine>
        </EditorRow>
      ))
    ) : (
      <EditorRow />
    )}
  </EditorBody>
);

export default DetailsContent;
