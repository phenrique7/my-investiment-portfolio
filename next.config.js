const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
});
