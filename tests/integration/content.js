const assert = require('chai').assert;

describe('Содержимое компонентов', function() {
  it('Репозитории', function() {
    return this.browser
      .url('/')
      .assertView('repositories__content', '.Layout-Container')
  });

  it('Файловая системы', function() {
    return this.browser
      .url('/server-info')
      .assertView('files__content', '.Table')
  });

  it('Файл', function() {
    return this.browser
      .url('/server-info/.gitignore')
      .assertView('file__content', '.Editor')
  });
});