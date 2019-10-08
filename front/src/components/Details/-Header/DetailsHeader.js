import React from 'react';
import {compose} from "@bem-react/core";
import {EditorHeaderColorDefault} from "../../../patterns/Editor/-Header/_color/Editor-Header_color_default";
import {EditorHeaderSpaceHM} from "../../../patterns/Editor/-Header/_space-h/Editor-Header_space-h_m";
import {EditorHeaderSpaceVS} from "../../../patterns/Editor/-Header/_space-v/Editor-Header_space-v_s";
import EditorHeaderBase from "../../../patterns/Editor/-Header/Editor-Header";
import {FileIconTypeCode} from "../../../patterns/File/-Icon/_type/File-Icon_type_code";
import {FileIconTypeFile} from "../../../patterns/File/-Icon/_type/File-Icon_type_file";
import {FileIconTypeReadme} from "../../../patterns/File/-Icon/_type/File-Icon_type_readme";
import FileIconBase from "../../../patterns/File/-Icon/File-Icon";
import EditorHeaderItem from "../../../patterns/Editor/-HeaderItem/Editor-HeaderItem";
import File from "../../../patterns/File/File";
import EditorByteCount from "../../../patterns/Editor/-ByteCount/Editor-ByteCount";
import EditorAction from "../../../patterns/Editor/-Action/Editor-Action";

const EditorHeader = compose(
  EditorHeaderColorDefault,
  EditorHeaderSpaceHM,
  EditorHeaderSpaceVS
)(EditorHeaderBase);

const FileIcon = compose(
  FileIconTypeCode,
  FileIconTypeFile,
  FileIconTypeReadme,
)(FileIconBase)

const DetailsHeader = ({fileName}) => (
  <EditorHeader
      color={'default'}
      spaceH={'m'}
      spaceV={'s'}
    >
      <EditorHeaderItem>
        <File>
          <FileIcon
            type={'code'}
          />
          {fileName}
        </File>
        <EditorByteCount>
          (4 347 bytes)
        </EditorByteCount>
      </EditorHeaderItem>
      <EditorHeaderItem>
        <EditorAction/>
      </EditorHeaderItem>
    </EditorHeader>
)

export default DetailsHeader;