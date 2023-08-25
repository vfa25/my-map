/*
 * @Author: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @Date: 2023-08-24 17:55:53
 * @LastEditors: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @LastEditTime: 2023-08-25 11:37:35
 * @FilePath: /my-map/config-overrides.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);