import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const TestPage = lazy(() => import('./test'));

const Routing = () => (
    <Switch>
      <Route exact path="/" component={TestPage} />
      <Redirect to="/" />
    </Switch>
  );

export default Routing;
