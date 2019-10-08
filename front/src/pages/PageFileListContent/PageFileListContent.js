import React from 'react';
import {compose} from '@bem-react/core';
import BranchInfoBase from "../../patterns/BranchInfo/BranchInfo";
import LayoutContainerBase from "../../patterns/Layout/-Container/Layout-Container";
import BranchInfoHeader from "../../patterns/BranchInfo/-Header/BranchInfo-Header";
import BranchInfoName from "../../patterns/BranchInfo/-Name/BranchInfo-Name";
import BranchInfoSelect from "../../patterns/BranchInfo/-Select/BranchInfo-Select";
import BranchInfoSearch from "../../patterns/BranchInfo/-Search/BranchInfo-Search";
import BranchInfoInfo from "../../patterns/BranchInfo/-Info/BranchInfo-Info";
import TabsItemBase from "../../patterns/Tabs/-Item/Tabs-Item";
import Tabs from "../../patterns/Tabs/Tabs";
import Layout from "../../patterns/Layout/Layout";
import ThemeBase from "../../Theme/Theme";
import {ThemeColorProjectDefault} from "../../Theme/_color/Theme_color_project-default";
import {ThemeSpaceDefault} from "../../Theme/_space/Theme_space_default";
import {ThemeSizeDefault} from "../../Theme/_size/Theme_size_default";
import {ThemeGapSmall} from "../../Theme/_gap/Theme_gap_small";
import {TabsItemStateActive} from "../../patterns/Tabs/-Item/_state/Tabs-Item_state_active";
import Header from "../../patterns/Header/Header";
import {LayoutContainerGrow} from "../../patterns/Layout/-Container/_grow/Layout-Container_grow";
import {Link} from 'react-router-dom';
import User from "../../patterns/User/User";
import Footer from "../../patterns/Footer/Footer";
import TableRow from "../../patterns/Table/-Row/Table-Row";
import TableCell from "../../patterns/Table/-Cell/Table-Cell";
import TableHead from "../../patterns/Table/-Head/Table-Head";
import Table from "../../patterns/Table/Table";
import {BranchInfoBorderBottom} from "../../patterns/BranchInfo/_border/BranchInfo_border_bottom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Files from "../../components/Files/Files";

const Theme = compose(
  ThemeSpaceDefault,
  ThemeSizeDefault,
  ThemeColorProjectDefault,
  ThemeGapSmall
)(ThemeBase);

const LayoutContainer = compose(
  LayoutContainerGrow
)(LayoutContainerBase)

const TabsItem = compose(
  TabsItemStateActive
)(TabsItemBase)

const BranchInfo = compose(
  BranchInfoBorderBottom
)(BranchInfoBase)

const headerMock = [
  'name',
  'Last commit',
  'Commit message',
  'Committer',
  'Updated'
]

const PageFileListContent = () => (
  <Theme space='default' size='default' color='project-default' gap='small' font='default'>
    <Layout>
      <Header/>
      <LayoutContainer grow>
        <BreadCrumbs/>
        <BranchInfo border='bottom'>
          <BranchInfoHeader>
            <BranchInfoName>
              arcadia
            </BranchInfoName>
            <BranchInfoSelect mix={{'block': 'select', 'mods': {'size': 'big'}}}>
<span color='secondary'>
trunk
</span>
              <i position='baseline'
                 mix={{'block': 'arrow', 'mods': {'state': 'down', 'color': 'secondary'}}}/>
            </BranchInfoSelect>
            <BranchInfoSearch>
            </BranchInfoSearch>
          </BranchInfoHeader>
          <BranchInfoInfo>
            {' Last commit '}
            <Link>c4d248</Link>
            {' on '}
            <Link>20 Oct 2017, 12:24</Link>
            {' by '}
            <User>robot-srch-releaser</User>
          </BranchInfoInfo>
          <Tabs>
            <TabsItem state='active'>
              files
            </TabsItem>
            <TabsItem>
              branches
            </TabsItem>
          </Tabs>
        </BranchInfo>
        <Table hide='touch'>
          <TableHead>
            <TableRow>
              {headerMock.map(headerName =>
                <TableCell key={headerName}>{headerName}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <tbody>
          <Files/>
          </tbody>
        </Table>
      </LayoutContainer>
      <Footer/>
    </Layout>
  </Theme>
)

export default PageFileListContent;
