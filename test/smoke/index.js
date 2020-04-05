const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');
const prod = require('../../lib/webapck.prod.js');

const mocha = new Mocha({
  timeout: '10000ms',
});

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  const prodConfig = prod;
  webpack(prodConfig, (error, stats) => {
    if (error) {
      console.error(error);
      process.exit(2);
    }
    console.log(stats.toString({
      colors: true,
    }));
    mocha.addFile(path.join(__dirname, 'html-test'));
    mocha.addFile(path.join(__dirname, 'js-css-test'));

    mocha.run();
  });
});
