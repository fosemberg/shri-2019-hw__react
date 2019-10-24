const assert = require('chai').assert;

describe('Содержимое компонентов', function() {
  const repositoriesUrl = '/';
  const repositoriesContent = '.Layout-Container';

  const filesUrl = '/server-info';
  const filesContent = '.Table';

  const fileUrl = '/server-info/.gitignore';
  const fileContent = '.Editor';

  it('Репозитории', function() {
    return this.browser
      .url(repositoriesUrl)
      .assertView('repositories__content', repositoriesContent)
  });

  it('Файловая системы', function() {
    return this.browser
      .url(filesUrl)
      .assertView('files__content', filesContent)
  });

  it('Файл', function() {
    return this.browser
      .url(fileUrl)
      .assertView('file__content', fileContent)
  });
});