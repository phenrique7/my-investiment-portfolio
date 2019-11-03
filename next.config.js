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
  env: {
    DEV_URL: 'http://localhost',
    PROD_URL: 'https://my-investiment-portfolio.pauloh1288.now.sh',
  },
});
