// prettier-ignore
import * as React from 'react';
import { Switch } from 'react-router';
import { LoginPage } from '../../pages';
import { ConfirmEmailPage } from '../../pages/ConfirmEmailPage';
import { Dashbord } from '../../pages/Dashbord';
import { HomePage } from '../../pages/HomePage';
import { SignupPage } from '../../pages/SignupPage';
import PublicRoute from '../PublicRoute';

interface Props {

}



function MainRoutes(props: Props) {

  return (
    <Switch>
      <PublicRoute restricted={true} path="/confirm-email" component={ConfirmEmailPage} />
      <PublicRoute restricted={true} path="/login" component={LoginPage} />
      <PublicRoute restricted={true} path="/signup" component={SignupPage} />
      <PublicRoute restricted={false} path="/" component={Dashbord} />
    </Switch>
  );

}

export default MainRoutes;