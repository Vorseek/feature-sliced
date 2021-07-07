import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const wrapComponent = (component: () => React.ReactNode): React.ReactNode => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>{component()}</Suspense>
    </BrowserRouter>
  );
};

const withRouter:  (component: () => React.ReactNode) => React.ReactNode = (component: () => React.ReactNode) =>
  wrapComponent(component);


export default withRouter;
