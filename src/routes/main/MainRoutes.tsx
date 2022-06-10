// prettier-ignore
import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ValidateEmail from '../../components/ValidateEmail';
import { LoginPage } from '../../pages';
import { ConfirmEmailPage } from '../../pages/ConfirmEmailPage';
import { Dashbord } from '../../pages/Dashbord';
import { HomePage } from '../../pages/HomePage';
import { SignupPage } from '../../pages/SignupPage';
import { UserPage } from '../../pages/UserPage';
import { VendorPage } from '../../pages/vendor/VendorPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

interface Props {

}

const PublicRestrictedRoutes = [
  { path: "confirm-email", children: <ConfirmEmailPage /> },
  { path: "login", children: <LoginPage /> },
  { path: "signup", children: <SignupPage /> },
  { path: "validate-email", children: <ValidateEmail /> },
]

const PublicRoutes = [
  { path: "confirm-email", children: <ConfirmEmailPage /> },
  { path: "login", children: <LoginPage /> },
  { path: "signup", children: <SignupPage /> },
  { path: "vendor/*", children: <VendorPage /> },
  { path: "validate-email", children: <ValidateEmail /> },
  { path: "/", children: <Dashbord />, }
]

const PrivateRoutes = [
  { path: "user/*", children: <UserPage /> },
]



function MainRoutes(props: Props) {

  return (
    <Routes>
      {
        PublicRestrictedRoutes.map((route, index) => {
          const { children, path } = route;
          return (
            <Route
              key={index}
              path={`${path}`}
              element={
                <PublicRoute restricted={true} >
                  {children}
                </PublicRoute>
              }
            />
          )
        })
      }
      {
        PublicRoutes.map((route, index) => {
          const { children, path } = route;
          return (
            <Route
              key={index}
              path={`${path}`}
              element={
                <PublicRoute restricted={false} >
                  {children}
                </PublicRoute>
              }
            />
          )
        })
      }
      {
        PrivateRoutes.map((route, index) => {
          const { children, path } = route;
          return (
            <Route
              key={index + PublicRoute.length}
              path={`${path}`}
              element={
                <PrivateRoute>
                  {children}
                </PrivateRoute>
              }
            />
          )
        })
      }
    </Routes>
  );

}

export default MainRoutes;