import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect, Provider } from 'react-redux'
import store from '../store'

@connect(state => ({ ...state.login }))
class SubRoutes extends Component {
  render() {
    const route = this.props
    return (<Route
      path={route.path}
      exact={route.exact}
      render={props => (
        route && (
          (route.isLogin || route.isPublic) ? (
            route.redirect ? 
            (<Redirect to={route.redirect} />) :
            (<route.component {...props} routes={route.routes} />)
          ) : (
            <Redirect 
              to={{
                pathname: "/login", 
                state: { from: props.location.pathname }
              }} 
            />
          )
        )
      )}
    />)
  }  
}

class SubRoutesProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <SubRoutes {...this.props}/>
      </Provider>  
    )
  }
}

export const RenderRoutes = ({routes}) => {  
  return <Switch> 
      {(routes.map((route, i) =>  <SubRoutesProvider key={i} {...route} />))} 
    </Switch> 
};