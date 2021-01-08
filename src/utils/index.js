/*
 * @Author: shilei
 * @Date: 2021-01-07 00:26:15
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-07 15:01:02
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/utils/index.js
 */

/**
* 获取body高度
*/
export const bodyHeight = () => {
  return document.body.clientHeight;
}

/**
 * 获取中间Content区域高度
 */
export const contentHeight = () => {
  return document.body.clientHeight - 64;
}