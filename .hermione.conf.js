module.exports = {
  baseUrl: 'http://localhost:3006', // тут крутится фронт
  gridUrl: 'http://localhost:4444/wd/hub', // here selenium
  sets: {
    desktop: {
      files: 'tests/desktop'
    }
  },

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome' // this browser should be installed on your OS
      }
    }
  },
  compositeImage: true, // если область не влазит в экран - чтобы не была ошибка
  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-report'
    }
  }
};