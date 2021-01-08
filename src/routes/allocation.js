/*
 * @Author: shilei
 * @Date: 2021-01-07 15:48:45
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 10:32:52
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/routes/allocation.js
 */

import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

const isLogin = true

export const SubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props =>
            route && ( 
              (!isLogin && !route.isPublic) ?
              (
                <Redirect 
                  to={{
                    pathname: "/login", 
                    state: { from: props.location.pathname }
                  }} 
                />
              ) : (
                route.redirect ? 
                (<Redirect to={route.redirect} />) :
                (<route.component {...props} routes={route.routes} />)
              )
            )
    }
  />
);

export const RenderRoutes = ({routes}) => {  
  return <Switch> 
      {(routes.map((route, i) =>  <SubRoutes key={i} {...route} />))} 
    </Switch> 
};