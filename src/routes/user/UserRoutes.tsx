import { Switch, useRouteMatch } from 'react-router';
import { NewAddress } from '../../components/user/NewAddress';
import { NewPaymentMethode } from '../../components/user/NewPaymentMethode';
import { PaymentMethods } from '../../components/user/PaymentMethods';
import { UserAddress } from '../../components/user/UserAddress';
import { UserOrder } from '../../components/user/UserOrder';
import { UserProfile } from '../../components/user/UserProfile';
import { UserWhishlist } from '../../components/user/UserWhishlist';
import PrivateRoute from '../PrivateRoute';

import React from 'react'

interface Props {

}

function UserRoutes(props: Props) {

  const { path } = useRouteMatch();

  return (
    <Switch>
      <PrivateRoute path={`${path}/profile`} component={UserProfile} />
      <PrivateRoute path={`${path}/orders`} component={UserOrder} />
      <PrivateRoute path={`${path}/address/add`} component={NewAddress} />
      <PrivateRoute path={`${path}/address`} component={UserAddress} />
      <PrivateRoute path={`${path}/whishlist`} component={UserWhishlist} />
      <PrivateRoute path={`${path}/payment-methods/add`} component={NewPaymentMethode} />
      <PrivateRoute path={`${path}/payment-methods`} component={PaymentMethods} />
    </Switch>
  );
}


export default UserRoutes;
