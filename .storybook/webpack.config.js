const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, '..'));

  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    ],
    include: path.resolve(__dirname, '..'),
  });

  return config;
};
