const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  overrideDevServer
} = require("customize-cra");

const devServerConfig = () => config => {
  // 开发模式下代理解决跨域
  return {
    ...config,
    proxy: {
      '/api': {
        target: process.env.REACT_APP_API_URL,
        changeOrigin: true,
        pathRewrite:{
        "^/api":"/"
        }
      }
    }
  };
};

 const rewiredMap = () => config => {
  // 关闭生产环境的source-map
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};

module.exports = {
  webpack: override(

    // 不需要在页面导入antd的css
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),

    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    rewiredMap()
  ),
  devServer: overrideDevServer(devServerConfig())
};

// module.exports = override(
//   // enable legacy decorators babel plugin
//   addDecoratorsLegacy()
// );

// const {injectBabelPlugin} = require('react-app-rewired')
// module.exports = function override(config, env) {
//   // config = injectBabelPlugin([
//   //   'import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}
//   // ], config);
//   config = injectBabelPlugin([
//     '@babel/plugin-proposal-decorators', {"legacy": true}
//   ], config);

//   return config;
// }