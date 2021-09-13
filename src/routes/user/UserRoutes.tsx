import { Switch } from 'react-router';
import { NewAddress } from '../../components/user/NewAddress';
import { NewPaymentMethode } from '../../components/user/NewPaymentMethode';
import { PaymentMethods } from '../../components/user/PaymentMethods';
import { UserAddress } from '../../components/user/UserAddress';
import { UserOrder } from '../../components/user/UserOrder';
import { UserProfile } from '../../components/user/UserProfile';
import { UserWhishlist } from '../../components/user/UserWhishlist';
import PrivateRoute from '../PrivateRoute';

interface Props {

}

function UserRoutes(props: Props) {

  return (
    <Switch>
      <PrivateRoute exact path="/profile" component={UserProfile} />
      <PrivateRoute exact path="/orders" component={UserOrder} />
      <PrivateRoute exact path="/address" component={UserAddress} />
      <PrivateRoute exact path="/whishlist" component={UserWhishlist} />
      <PrivateRoute exact path="/payment-methods" component={PaymentMethods} />
      <PrivateRoute exact path="/address/add" component={NewAddress} />
      <PrivateRoute exact path="/payment-methods/add" component={NewPaymentMethode} />
    </Switch>
  );
}


export default UserRoutes;
