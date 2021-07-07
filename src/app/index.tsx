import Routing from 'pages';
import { ReactQueryDevtools } from 'react-query/devtools';
import withProviders from './providers';
import './index.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Routing />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default withProviders(App);
