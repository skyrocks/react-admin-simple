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