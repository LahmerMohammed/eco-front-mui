import { NewAddress } from '../../components/user/NewAddress';
import { NewPaymentMethode } from '../../components/user/NewPaymentMethode';
import { PaymentMethods } from '../../components/user/PaymentMethods';
import { UserAddress } from '../../components/user/UserAddress';
import { UserOrder } from '../../components/user/UserOrder';
import { UserProfile } from '../../components/user/UserProfile';
import { UserWhishlist } from '../../components/user/UserWhishlist';
import PrivateRoute from '../PrivateRoute';

import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

interface Props {

}

const routes = [
  { path: 'profile', children: <UserProfile /> },
  { path: 'orders', children: <UserOrder /> },
  { path: 'address/add', children: <NewAddress /> },
  { path: 'address', children: <UserAddress /> },
  { path: 'whishlist', children: <UserWhishlist /> },
  { path: 'payment-methods/add', children: <NewPaymentMethode /> },
  { path: 'payment-methods', children: <PaymentMethods /> },
]

function UserRoutes(props: Props) {


  return (
    <Routes>
      {
        routes.map((route, index) => {
          const { children, path } = route;
          return (
            <Route key={index} path={`${path}`} element={<PrivateRoute />}>
              <Route path={`${path}`} element={children} />
            </Route>
          )
        })
      }
    </Routes>
  );
}


export default UserRoutes;

