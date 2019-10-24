const assert = require('assert');

describe('Переходы по страницам', function() {
  it('Из списка репозиториев на список файлов', function() {
    return this.browser
      .url('/')
      .assertView('before_open_repository', 'body')
      .click('[href="/server-info"]')
      .assertView('after_open_repository', 'body')
  });

  it('Из списка файлов во вложенную папку', function() {
    return this.browser
      .url('/server-info')
      .assertView('before_open_folder', 'body')
      .click('[href="/server-info/src"]')
      .assertView('after_open_folder', 'body')
  });

  it('Из списка файлов на страницу отдельного файла', function() {
    return this.browser
      .url('/server-info')
      .assertView('before_open_file', 'body')
      .click('[href="/server-info/.gitignore"]')
      .assertView('after_open_file', 'body')
  });

  it('Переходы по хлебным крошкам', function() {
    return this.browser
      .url('/server-info/src/components/Navbar')
      .assertView('BreadCrumbs_server-info_src_components_Navbar', '.BreadCrumbs')
      .click('[href="/server-info/src/components"]')
      .assertView('BreadCrumbs_server-info_src_components', '.BreadCrumbs')
      .click('[href="/server-info/src"]')
      .assertView('BreadCrumbs_server-info_src', '.BreadCrumbs')
      .click('[href="/server-info"]')
      .assertView('BreadCrumbs_server-info', '.BreadCrumbs')
  });
});