var webpack = require('webpack');

module.exports = {
  entry: {
    dev: ["./_scripts/dev.js"],
    site: ["./_scripts/site.js"],
    vendor: ["./_scripts/vendor.js"]
  },
  output: {
    path: "./js",
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      WebFont: 'webfontloader'
    })
  ],
  watch: true
};