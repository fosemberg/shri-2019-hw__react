const assert = require('chai').assert;

describe('breadcrumbs', function() {
  it('should find breadcrumbs', function() { // here only normal functions, no arrow functions
    return this.browser
      .url('/server-info/.gitignore') // go to this url
      // make screenshoot and compare with reference (with old screenshot)
      .assertView('breadcrumbs', '.BreadCrumbs') // name of image, node of saving
  });
});