import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const PostPage = lazy(() => import('./post'));
const Charter = lazy(() => import('./charter'));

const Routing = () => (
    <Switch>
      <Route exact path="/" component={PostPage} />
      <Route exact path="/charter" component={Charter} />
      <Redirect to="/" />
    </Switch>
  );

export default Routing;
