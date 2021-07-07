import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const PostPage = lazy(() => import('./post'));

const Routing = () => (
    <Switch>
      <Route exact path="/" component={PostPage} />
      <Redirect to="/" />
    </Switch>
  );

export default Routing;
