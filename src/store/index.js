/*
 * @Author: shilei
 * @Date: 2021-01-08 00:07:59
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 19:50:02
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/store/index.js
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import login from './login.reducer'

export default createStore(combineReducers({login}), applyMiddleware(thunk))
