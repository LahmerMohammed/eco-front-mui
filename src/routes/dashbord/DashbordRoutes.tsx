// prettier-ignore
import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from '../../pages';
import { ConfirmEmailPage } from '../../pages/ConfirmEmailPage';
import { HomePage } from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import { SignupPage } from '../../pages/SignupPage';
import { UserPage } from '../../pages/UserPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import UserRoutes from '../user/UserRoutes';

interface Props {

}

const routes = [
  /* { path: "/user/*", children: <UserPage />, element: <PrivateRoute /> },
  { path: "/", children: <HomePage />, element: <PublicRoute restricted={false} /> } */
]

function DashbordRoutes(props: Props) {


  return (
    <Routes>
      <Route
        path={`/user/*`}
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route
        path={`/search`}
        element={
          <PublicRoute restricted={false}>
            <SearchPage />
          </PublicRoute>
        }
      />
      <Route
        path={`/products/:id`}
        element={
          <PublicRoute restricted={false}>
            <ProductPage />
          </PublicRoute>
        }
      />
      <Route
        path={`/*`}
        element={
          <PublicRoute restricted={false}>
            {/* <HomePage /> */}
          </PublicRoute>
        }
      />
    </Routes>
  );

}

export default DashbordRoutes;