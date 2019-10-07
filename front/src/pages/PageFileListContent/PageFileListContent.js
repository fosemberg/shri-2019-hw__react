import React from 'react';
import {compose} from '@bem-react/core';
import BranchInfoBase from "../../components/BranchInfo/BranchInfo";
import LayoutContainerBase from "../../components/Layout/-Container/Layout-Container";
import BreadCrumbsBase from "../../components/BreadCrumbs/BreadCrumbs";
import BreadCrumbsItem from "../../components/BreadCrumbs/-Item/BreadCrumbs-Item";
import BranchInfoHeader from "../../components/BranchInfo/-Header/BranchInfo-Header";
import BranchInfoName from "../../components/BranchInfo/-Name/BranchInfo-Name";
import BranchInfoSelect from "../../components/BranchInfo/-Select/BranchInfo-Select";
import BranchInfoSearch from "../../components/BranchInfo/-Search/BranchInfo-Search";
import BranchInfoInfo from "../../components/BranchInfo/-Info/BranchInfo-Info";
import TabsItemBase from "../../components/Tabs/-Item/Tabs-Item";
import Tabs from "../../components/Tabs/Tabs";
import Layout from "../../components/Layout/Layout";
import ThemeBase from "../../components/Theme/Theme";
import {ThemeColorProjectDefault} from "../../components/Theme/_color/Theme_color_project-default";
import {ThemeSpaceDefault} from "../../components/Theme/_space/Theme_space_default";
import {ThemeSizeDefault} from "../../components/Theme/_size/Theme_size_default";
import {ThemeGapSmall} from "../../components/Theme/_gap/Theme_gap_small";
import {TabsItemStateActive} from "../../components/Tabs/-Item/_state/Tabs-Item_state_active";
import Header from "../../components/Header/Header";
import {BreadCrumbsBorderB} from "../../components/BreadCrumbs/_border-b/BreadCrumbs_border-b";
import {LayoutContainerGrow} from "../../components/Layout/-Container/_grow/Layout-Container_grow";
import Link from "../../components/Link/Link";
import User from "../../components/User/User";
import Footer from "../../components/Footer/Footer";
import TableRow from "../../components/Table/-Row/Table-Row";
import TableCell from "../../components/Table/-Cell/Table-Cell";
import TableHead from "../../components/Table/-Head/Table-Head";
import Table from "../../components/Table/Table";
import {BranchInfoBorderBottom} from "../../components/BranchInfo/_border/BranchInfo_border_bottom";

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

const BreadCrumbs = compose(
    BreadCrumbsBorderB
)(BreadCrumbsBase)

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

const dataMock = [
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "79d57a",
        "name": ".gitignore",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "2f3ca9",
        "name": "API.md",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "ddfd03",
        "name": "README.md",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "040000",
        "fileType": "dir",
        "lastCommit": "0fb9f0",
        "name": "README",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "3f287e",
        "name": "images.d.ts",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "1c360e",
        "name": "package.json",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "040000",
        "fileType": "dir",
        "lastCommit": "461e8d",
        "name": "public",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "040000",
        "fileType": "dir",
        "lastCommit": "e34870",
        "name": "src",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "7d74db",
        "name": "tsconfig.json",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "414421",
        "name": "tsconfig.prod.json",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "65ffdd",
        "name": "tsconfig.test.json",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "206b22",
        "name": "tslint.json",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    },
    {
        "num": "100644",
        "fileType": "file",
        "lastCommit": "74373a",
        "name": "yarn.lock",
        "commitMessage": "[vcs] move http to arc",
        "committer": "noxoomo",
        "updated": "4 s ago"
    }
]

const PageFileListContent = () => (
    <Theme space='default' size='default' color='project-default' gap='small' font='default'>
        <Layout>
            <Header/>
            <LayoutContainer grow>
                <BreadCrumbs borderB/>
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
                    {
                        dataMock.map(
                            ({
                                 fileType,
                                 name,
                                 lastCommit,
                                 commitMessage,
                                 committer,
                                 updated
                             }) =>
                                <TableRow>
                                    <TableCell>
                                        <div class="file file_type_dir">
                                            <div class="file__icon file__icon_type_${fileType}"></div>
                                            {name}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <a class="link link__control" href="#" role="link"
                                           tabindex="0">{lastCommit}
                                        </a>
                                    </TableCell>
                                    <TableCell>{commitMessage}</TableCell>
                                    <TableCell><span class="user">{committer}</span></TableCell>
                                    <TableCell>{updated}</TableCell>
                                </TableRow>
                        )
                    }
                    </tbody>
                </Table>
            </LayoutContainer>
            <Footer/>
        </Layout>
    </Theme>
);

export default PageFileListContent;
