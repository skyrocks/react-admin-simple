/*
 * @Author: shilei
 * @Date: 2021-01-07 16:15:09
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-07 23:04:21
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/routes/PrivateRoute.js
 */
import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

class PrivateRoute extends Component {
  render() {  
    const {component: Comp, ...rest} = this.props
    return (
      <Route 
        {...rest} 
        // render 和 component 二选一
        render={props => 
          this.props.isLogin ? (
            <Redirect 
              to={{
                pathname: "/login", 
                state: { from: props.location.pathname }
              }} 
            />
            
          ) : (
            <Comp {...props}/>
          )
    } />)
  }
}

export default PrivateRoute