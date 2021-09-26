// prettier-ignore
import * as React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { LoginPage } from '../../pages';
import { ConfirmEmailPage } from '../../pages/ConfirmEmailPage';
import { HomePage } from '../../pages/HomePage';
import { SignupPage } from '../../pages/SignupPage';
import { UserPage } from '../../pages/UserPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import UserRoutes from '../user/UserRoutes';

interface Props {

}

function DashbordRoutes(props: Props) {

  const { path } = useRouteMatch();

  return (
    <Switch>
      <PrivateRoute path={`/user`} component={UserPage} />
      <PublicRoute exact restricted={false} path={`${path}`} component={HomePage} />
    </Switch>
  );

}

export default DashbordRoutes;