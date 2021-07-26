import Routing from 'pages';
import { ReactQueryDevtools } from 'react-query/devtools';
import withProviders from './providers';
import './index.scss';
import 'antd/dist/antd.css';

function App() {
  const handler = () => {};
  return (
    <div className='container'>
      <Routing />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default withProviders(App);
