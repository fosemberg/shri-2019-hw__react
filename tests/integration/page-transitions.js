const assert = require('assert');

describe('Переходы по страницам', function() {
  const repositoriesUrl = '/';
  const repositoryUrl = '/server-info';

  const page = 'body';
  const repository = '[href="/server-info"]';
  const subFolder = '[href="/server-info/src"]';
  const subFolder2 = '[href="/server-info/src/components"]';
  const subFolder3 = '[href="/server-info/src/components/Navbar"]';
  const file = '[href="/server-info/.gitignore"]';
  const breadCrumbs = '.BreadCrumbs';

  it('Из списка репозиториев на список файлов', function() {
    return this.browser
      .url(repositoriesUrl)
      .assertView('before_open_repository', page)
      .click(repository)
      .assertView('after_open_repository', page)
  });

  it('Из списка файлов во вложенную папку', function() {
    return this.browser
      .url(repositoryUrl)
      .assertView('before_open_folder', page)
      .click(subFolder)
      .assertView('after_open_folder', page)
  });

  it('Из списка файлов на страницу отдельного файла', function() {
    return this.browser
      .url(repositoryUrl)
      .assertView('before_open_file', page)
      .click(file)
      .assertView('after_open_file', page)
  });

  it('Переходы по хлебным крошкам', function() {
    return this.browser
      .url(repositoryUrl)
      .assertView('BreadCrumbs__forward_server-info', breadCrumbs)
      .click(subFolder)
      .assertView('BreadCrumbs__forward_server-info_src', breadCrumbs)
      .click(subFolder2)
      .assertView('BreadCrumbs__forward_server-info_src_components', breadCrumbs)
      .click(subFolder3)
      .assertView('BreadCrumbs__forward_server-info_src_components_Navbar', breadCrumbs)
      .click(subFolder2)
      .assertView('BreadCrumbs__back_server-info_src_components', breadCrumbs)
      .click(subFolder)
      .assertView('BreadCrumbs__back_server-info_src', breadCrumbs)
      .click(repository)
      .assertView('BreadCrumbs__back_server-info', breadCrumbs)
  });
});