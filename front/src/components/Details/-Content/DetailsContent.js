import React from 'react';
import EditorRow from "../../../patterns/Editor/-Row/Editor-Row";
import EditorNumber from "../../../patterns/Editor/-Number/Editor-Number";
import EditorLine from "../../../patterns/Editor/-Line/Editor-Line";
import {compose} from "@bem-react/core";
import {EditorBodyColorMain} from "../../../patterns/Editor/-Body/_color/Editor-Body_color_main";
import EditorBodyBase from "../../../patterns/Editor/-Body/Editor-Body";

const EditorBody = compose(
  EditorBodyColorMain
)(EditorBodyBase);

const DetailsContent = ({data}) => (
  <EditorBody color={'main'}>
    {
      typeof data === 'string'
        ? data
        .split('\n')
        .map((stroke, key) =>
          <EditorRow key={key}>
            <EditorNumber>
              {key}
            </EditorNumber>
            <EditorLine>
              {stroke}
            </EditorLine>
          </EditorRow>
        )
        : <EditorRow></EditorRow>
    }
  </EditorBody>
)

export default DetailsContent;