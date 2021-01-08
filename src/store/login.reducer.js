/*
 * @Author: shilei
 * @Date: 2021-01-08 19:33:09
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 20:14:59
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/store/login.reducer.js
 */
const loginReducer = (state = {isLogin: false}, action) => {
  if (action.type === 'login') {
    return {isLogin: true}
  } else {
    return {isLogin: false}
  }  
}

function login(callback) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({ type: "login" });
      callback()
    }, 1000);
  };
}

export default loginReducer

export { login }