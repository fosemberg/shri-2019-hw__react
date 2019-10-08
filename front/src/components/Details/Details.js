import React from 'react';
import SectionBase from "../../patterns/Section/Section";
import {compose} from "@bem-react/core";
import {SectionIndentTM} from "../../patterns/Section/_indent-t/Section_indent-t_m";
import {SectionIndentBM} from "../../patterns/Section/_indent-b/Section_indent-b_m";
import {cnEditor} from "../../patterns/Editor/Editor";
import "../../patterns/Editor/Editor.scss";
import "../../patterns/Editor/_border/Editor_border_faded.scss";
import EditorHeaderBase from "../../patterns/Editor/-Header/Editor-Header";
import {EditorHeaderSpaceHM} from "../../patterns/Editor/-Header/_space-h/Editor-Header_space-h_m";
import {EditorHeaderSpaceVS} from "../../patterns/Editor/-Header/_space-v/Editor-Header_space-v_s";
import {EditorHeaderColorDefault} from "../../patterns/Editor/-Header/_color/Editor-Header_color_default";
import EditorHeaderItem from "../../patterns/Editor/-HeaderItem/Editor-HeaderItem";
import File from "../../patterns/File/File";
import FileIconBase from "../../patterns/File/-Icon/File-Icon";
import {FileIconTypeCode} from "../../patterns/File/-Icon/_type/File-Icon_type_code";
import {FileIconTypeFile} from "../../patterns/File/-Icon/_type/File-Icon_type_file";
import {FileIconTypeReadme} from "../../patterns/File/-Icon/_type/File-Icon_type_readme";


const Section = compose(
  SectionIndentTM,
  SectionIndentBM,
)(SectionBase);

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

const Details = ({data, fileName = 'fileName'}) => (
  <Section
    className={cnEditor({border: 'faded'})}
    indentT='m'
    indentB='m'
  >
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
      </EditorHeaderItem>

    </EditorHeader>
    {data}
  </Section>
)

export default Details;