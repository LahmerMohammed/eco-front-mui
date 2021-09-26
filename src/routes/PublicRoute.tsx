import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";
import React from 'react'
import { setToken } from "../services/base";
import { userService } from "../services/userService";
import { loadUser } from "../redux/action-creators/login-actions";
import { isLogin } from "./utils";


interface IPublicRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;

  // tslint:disable-next-line:no-any
  children?: any;

  restricted: boolean;
}





const PublicRoute = (props: IPublicRouteProps) => {

  const { component: Component, children, restricted, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin() && restricted ? <Redirect to={{ pathname: '/' }} /> : (
          Component ? (<Component  {...props} />) : (children)
        )
      }}
    />
  )

}


export default PublicRoute;