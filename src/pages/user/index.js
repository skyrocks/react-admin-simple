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
