var _ = require('lodash');
var path = require('path');
var glob = require('glob');
var webpack = require('webpack');

var files = _.map(glob.sync('spec-js/**/!(mocha-setup-node|mocha.sauce.gruntfile|mocha.sauce.runner|webpack.mocha.config|painter|diagram-test-runner|testScheduler-ui).js'), function (x) {
  return path.resolve('./', x);
});

module.exports = {
  entry: {
    'browser.testscheduler': './spec-js/helpers/testScheduler-ui.js',
    'browser.spec': files
  },

  output: {
    path: './tmp/browser',
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('browser.common.js')
  ]
};