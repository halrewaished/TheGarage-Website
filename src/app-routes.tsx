import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutesObj } from "./app.paths";
import Loading from "src/components/common/loading";

const LandingPage = React.lazy(() => import("./pages/user/landing-page"));

const withSuspense = (WrappedComponent: JSX.Element) => {
  return (
    <Suspense
      fallback={
        <Loading />
      }
    >
      {WrappedComponent}
    </Suspense>
  );
};

export function AppRouting() {
  return (
    <Suspense
      fallback={<Loading />}
    >
      <BrowserRouter>
        <Routes>
          <Route
            key="landingPage"
            path={appRoutesObj.getLandingPagePath()}
            element={withSuspense(<LandingPage />)}
          />  
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
