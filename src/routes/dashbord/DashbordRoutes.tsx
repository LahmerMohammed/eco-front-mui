// prettier-ignore
import * as React from 'react';
import { Switch } from 'react-router';
import { LoginPage } from '../../pages';
import { ConfirmEmailPage } from '../../pages/ConfirmEmailPage';
import { HomePage } from '../../pages/HomePage';
import { SignupPage } from '../../pages/SignupPage';
import PublicRoute from '../PublicRoute';

interface Props {

}

function DashbordRoutes(props: Props) {


  return (
    <Switch>
      <PublicRoute exact path="/" component={HomePage} />
    </Switch>
  );

}

export default DashbordRoutes;