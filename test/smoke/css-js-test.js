const glob = require('glob-all');

describe('Checking generated html files', () => {
  it('should generate html files', (done) => {
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_css*.css',
      './dist/search_*.js',
      './dist/search_css*.css',
    ]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generated');
    }
  });
});
