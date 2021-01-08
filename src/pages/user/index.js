/*
 * @Author: shilei
 * @Date: 2021-01-07 14:16:33
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 10:54:46
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/pages/user/index.js
 */
import React, { Component } from 'react'
import request from '../../utils/request'

export default class User extends Component {

  componentDidMount() {
    request({
      url: `/api/mobile/sys/findAll_User.action`,      
      data: {start:0, limit: 10},
    })
    .then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        User
      </div>
    )
  }
}
