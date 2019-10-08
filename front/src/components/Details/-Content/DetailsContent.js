import React from 'react';
import EditorRow from "../../../patterns/Editor/-Row/Editor-Row";
import EditorNumber from "../../../patterns/Editor/-Number/Editor-Number";
import EditorLine from "../../../patterns/Editor/-Line/Editor-Line";

const DetailsContent = ({data}) => (
  <>
    {
      data
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
    }
  </>
)

export default DetailsContent;