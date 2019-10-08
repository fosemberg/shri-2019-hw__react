import React, {useState, useEffect, memo} from "react";
import {compose} from '@bem-react/core';
import LayoutContainerBase from "../../patterns/Layout/-Container/Layout-Container";
import Layout from "../../patterns/Layout/Layout";
import ThemeBase from "../../Theme/Theme";
import {ThemeColorProjectDefault} from "../../Theme/_color/Theme_color_project-default";
import {ThemeSpaceDefault} from "../../Theme/_space/Theme_space_default";
import {ThemeSizeDefault} from "../../Theme/_size/Theme_size_default";
import {ThemeGapSmall} from "../../Theme/_gap/Theme_gap_small";
import Header from "../../components/Header/Header";
import {LayoutContainerGrow} from "../../patterns/Layout/-Container/_grow/Layout-Container_grow";
import Footer from "../../patterns/Footer/Footer";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import BranchInfo from "../../components/BranchInfo/BranchInfo";
import Files from "../../components/Files/Files";
import Details from "../../components/Details/Details";
import {useLocation} from "react-router";
import {usePathname} from "../../utils/helpers";

const Theme = compose(
  ThemeSpaceDefault,
  ThemeSizeDefault,
  ThemeColorProjectDefault,
  ThemeGapSmall
)(ThemeBase);

const LayoutContainer = compose(
  LayoutContainerGrow
)(LayoutContainerBase)


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

const getDataTest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(dataMock), 1000)
  })
}

const getData = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(dataMock), 1000)
  })
}

const MainPage = ({getData = getDataTest}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(false);
    setData({});
  }, [pathname])

  console.log(pathname);

  getData(pathname).then(
    json => {
      setData(json);
      setIsLoaded(true);
    }
  )

  const isFile = false;
  return <Theme
    space='default'
    size='default'
    color='project-default'
    gap='small'
    font='default'
  >
    <Layout>
      <Header/>
      <LayoutContainer grow>
        <BreadCrumbs/>
        <BranchInfo/>
        {
          isLoaded
            ? isFile
              ? <Details data={data}/>
              : <Files data={data}/>
            : <div>Loading...</div>
        }
      </LayoutContainer>
      <Footer/>
    </Layout>
  </Theme>
}

export default MainPage;
