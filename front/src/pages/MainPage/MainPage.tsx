import { compose } from '@bem-react/core';
import React, { memo, useEffect, useState } from 'react';
import BranchInfo from '../../components/BranchInfo/BranchInfo';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Details from '../../components/Details/Details';
import Files from '../../components/Files/Files';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import RepositoriesTable from '../../components/RepositoriesTable/RepositoriesTable';
import Footer from '../../patterns/Footer/Footer';
import { LayoutContainerGrow } from '../../patterns/Layout/-Container/_grow/Layout-Container_grow';
import LayoutContainerBase from '../../patterns/Layout/-Container/Layout-Container';
import Layout from '../../patterns/Layout/Layout';
import { ThemeColorProjectDefault } from '../../Theme/_color/Theme_color_project-default';
import { ThemeGapSmall } from '../../Theme/_gap/Theme_gap_small';
import { ThemeSizeDefault } from '../../Theme/_size/Theme_size_default';
import { ThemeSpaceDefault } from '../../Theme/_space/Theme_space_default';
import ThemeBase from '../../Theme/Theme';
import { urlToArray, usePathname } from '../../utils/helpers';
import { IFile, Page } from '../../utils/types';

interface IMainPage {
  getData: (pathname: string) => Promise<string | string[] | IFile[]>;
}

const Theme = compose(
  ThemeSpaceDefault,
  ThemeSizeDefault,
  ThemeColorProjectDefault,
  ThemeGapSmall
)(ThemeBase);

const LayoutContainer = compose(LayoutContainerGrow)(LayoutContainerBase);

const MainPage: React.FC<IMainPage> = ({ getData }) => {
  const [page, setPage] = useState(Page.loader);
  const [data, setData] = useState({});
  const [fileName, setFileName] = useState('');
  const pathname = usePathname();
  const urlArr = urlToArray(pathname);
  const repositoryName = urlArr[0] || '';

  useEffect(() => {
    setPage(Page.loader);
    setData({});
    getData(pathname).then((json) => {
      setData(json);
      const _page =
        pathname === '/'
          ? Page.repositories
          : Array.isArray(json)
          ? Page.files
          : Page.details;
      const fileName = urlArr.pop() || '';
      _page === Page.details && setFileName(fileName);
      setPage(_page);
    });
  }, [pathname]);

  return (
    <Theme
      space="default"
      size="default"
      color="project-default"
      gap="small"
      font="default"
    >
      <Layout>
        <Header repositoryName={repositoryName} />
        <LayoutContainer grow>
          {page !== Page.repositories && <BreadCrumbs />}
          <BranchInfo repositoryName={repositoryName} page={page} />
          {page === Page.loader ? (
            <Loader />
          ) : page === Page.files ? (
            <Files data={data as IFile[]} />
          ) : page === Page.details ? (
            <Details data={data as string} fileName={fileName} />
          ) : page === Page.repositories ? (
            <RepositoriesTable data={data as string[]} />
          ) : (
            ''
          )}
        </LayoutContainer>
        <Footer />
      </Layout>
    </Theme>
  );
};

export default memo(MainPage);
