const assert = require('chai').assert;

describe('openFile', function() {
  it('should find breadcrumbs', function() { // here only normal functions, no arrow functions
    return this.browser
      .url('/server-info') // go to this url
      .assertView('before_open_gitinore', 'body') // make screenshoot and compare with reference (with old screenshot)
      .click('[href="/server-info/.gitignore"]')
      .assertView('after_open_gitinore', 'body') // make screenshoot and compare with reference (with old screenshot)
  });
});