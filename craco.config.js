// 别名和 less 配置
const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = pathname => path.resolve(__dirname, pathname);

module.exports = {
    // less
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ],
    // webpack: 这里的配置会覆盖掉 webpack 中的别名配置
    webpack: {
        alias: {
            '@': resolve('src'),
            'components': resolve('src/components'),
        }  
    }
}