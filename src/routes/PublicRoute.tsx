import React from 'react'
import { setToken } from "../services/base";
import { userService } from "../services/userService";
import { loadUser } from "../redux/action-creators/login-actions";
import { isLogin } from "./utils";
import { Route, RouteProps, Navigate, Outlet } from 'react-router-dom';


interface IPublicRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  children?: any;

  restricted: boolean;
}





const PublicRoute = (props: IPublicRouteProps) => {

  const { children, restricted } = props;
  console.log("public router");

  return isLogin() && restricted ? <Navigate to="/" replace /> : children;

}

export default PublicRoute;