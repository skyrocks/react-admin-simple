/*
 * @Author: shilei
 * @Date: 2021-01-08 00:07:59
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 16:27:47
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/store/login.js
 */
import { createStore } from 'redux'

const loginReducer = (state = {isLogin: false}, action) => {
  if (action.type === 'login') {
    setTimeout(() => {
      return {isLogin: true}
    }, 1000)    
  } else {
    return {isLogin: false}
  }  
}

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: "login" })
});

export default createStore(loginReducer)

export {mapStateToProps, mapDispatchToProps}