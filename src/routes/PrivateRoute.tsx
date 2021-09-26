import { Redirect, Route, RouteProps } from "react-router-dom";
import React from 'react'
import { isLogin } from "./utils";


interface IPrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;

  // tslint:disable-next-line:no-any
  children?: any;
}





const PrivateRoute = (props: IPrivateRouteProps) => {

  const { component: Component, children, ...rest } = props;

  return (
    <Route
      {...rest}

      render={props => {
        return isLogin() ? (
          Component ? (<Component  {...props} />) : (children)
        ) : <Redirect to={{ pathname: '/login' }} />
      }}
    />
  )

}

export default PrivateRoute;