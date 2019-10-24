const assert = require('assert');

describe('Переходы по страницам', function() {
  it('Из списка репозиториев на список файлов', function() {
    return this.browser
      .url('/')
      .assertView('before_open_repository', 'body')
      .click('[href="/server-info"]')
      .assertView('after_open_repository', 'body')
  });

  it('Из списка файлов на страницу отдельного файла', function() {
    return this.browser
      .url('/server-info')
      .assertView('before_open_file', 'body')
      .click('[href="/server-info/.gitignore"]')
      .assertView('after_open_file', 'body')
  });
});