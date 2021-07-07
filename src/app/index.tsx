import { withProviders } from "./providers";
import { Routing } from "pages";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.scss";
import "antd/dist/antd.css";

const App = () => {
  return (
    <>
      <Routing />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default withProviders(App) as React.ComponentType;
