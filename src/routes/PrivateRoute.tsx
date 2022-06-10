import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";
import React from 'react'
import { isLogin } from "./utils";


interface IPrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;

  // tslint:disable-next-line:no-any
  children?: any;
}





const PrivateRoute = (props: IPrivateRouteProps) => {

  const { children } = props;
  console.log("private router");
  return isLogin() ? children : <Navigate to='/login' replace />;

}

export default PrivateRoute;