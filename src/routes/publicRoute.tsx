import { Redirect, Route, RouteProps } from "react-router-dom";
import React from 'react'


interface IPublicRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;

  // tslint:disable-next-line:no-any
  children?: any;
}


function isLogin() { return true; }


const publicRoute = (props: IPublicRouteProps) => {

  const { component: Component, children, ...rest } = props;

  return (
    <Route
      {...rest}

      render={props => {
        return isLogin() ? (
          Component ? (<Component  {...props} />) : (children)
        ) : <Redirect to={{ pathname: '/home' }} />
      }}
    />
  )

}