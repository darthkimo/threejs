const path = require('path');

module.exports = (env) => {
  const isProd = env === 'production';
  return {
    entry: path.resolve(__dirname, './src/js/index.js'),
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(scss|css)/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js'],
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
  };
};
