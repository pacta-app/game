const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const paths = require('./node_modules/react-scripts/config/paths');

module.exports = function override(config, webpackEnv) {

  const isEnvProduction = webpackEnv === 'production';
  const isEnvDevelopment = webpackEnv === 'development';
  const publicPath = isEnvProduction
    ? paths.publicUrlOrPath
    : isEnvDevelopment && '/';
  const publicUrl = isEnvProduction
    ? publicPath.slice(0, -1)
    : isEnvDevelopment && '';

  if (!config.plugins) {
    config.plugins = [];
  }

  if (isEnvProduction) {
    config.plugins.push(
      new WorkboxWebpackPlugin.GenerateSW({
        clientsClaim: true,
        exclude: [/\.map$/, /asset-manifest\.json$/],
        importWorkboxFrom: 'local', // this is the only change from the original webpack.config.js
        navigateFallback: publicUrl + '/index.html',
        navigateFallbackBlacklist: [
          new RegExp('^/_'),
          new RegExp('/[^/]+\\.[^/]+$'),
        ],
      })   
    );
  }
  return config;
}