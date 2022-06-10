import { NewAddress } from '../../components/user/NewAddress';
import { NewPaymentMethode } from '../../components/user/NewPaymentMethode';
import { PaymentMethods } from '../../components/user/PaymentMethods';
import { UserAddress } from '../../components/user/UserAddress';
import { UserOrder } from '../../components/user/UserOrder';
import { UserProfile } from '../../components/user/UserProfile';
import { UserWhishlist } from '../../components/user/UserWhishlist';
import PrivateRoute from '../PrivateRoute';

import React from 'react'
import { VendorDashboard } from '../../components/vendor/VendorDashboard';
import PublicRoute from '../PublicRoute';
import { VendorProducts } from '../../components/vendor/VendorProducts';
import { ProductForm } from '../../components/vendor/ProductForm';
import { VendorAccount } from '../../components/vendor/VendorAccount';
import { Route, Routes, useLocation } from 'react-router-dom';

interface Props {

}

const routes = [
  { path: "dashboard", children: <VendorDashboard /> },
  { path: "products/:id*", children: <ProductForm /> },
  { path: "products", children: <VendorProducts /> },
  { path: "products/add", children: <ProductForm /> },
  { path: "orders", children: <UserOrder /> },
  { path: "account-settings`", children: <VendorAccount /> },
]

function VendorRoutes(props: Props) {

  console.log(window.location.pathname);

  return (
    <Routes>
      {
        routes.map((route, index) => {
          const { children, path } = route;
          return (
            <Route
              key={index}
              path={`${path}`}
              element={
                <PublicRoute restricted={false} children={children} />
              }
            />
          )
        })
      }
    </Routes>
  );
}

export default VendorRoutes;
