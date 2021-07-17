import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const PostPage = lazy(() => import('./post'));
const Charter = lazy(() => import('./charter'));
const Graphql = lazy(() => import('./graphql'));

const Routing = () => (
    <Switch>
      <Route exact path="/" component={PostPage} />
      <Route exact path="/charter" component={Charter} />
      <Route exact path="/graphql" component={Graphql} />
      <Redirect to="/" />
    </Switch>
  );

export default Routing;
