const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nose-hht-dev/' : '/',
  transpileDependencies: ['vuetify'],
  configureWebpack: (config) => {
    return {
      plugins: [new NodePolyfillPlugin()],
      resolve: {
        fallback: {
          fs: false,
          child_process: false,
          tls: false,
          net: false,
        },
      },
    };
  },
};
