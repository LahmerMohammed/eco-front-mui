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
import { VendorDashboard } from '../../components/vendor/VendorDashboard';
import PublicRoute from '../PublicRoute';

interface Props {

}

function VendorRoutes(props: Props) {

  const { path } = useRouteMatch();

  return (
    <Switch>
      <PublicRoute restricted={false} path={`${path}/dashboard`} component={VendorDashboard} />
    </Switch>
  );
}


export default VendorRoutes;
