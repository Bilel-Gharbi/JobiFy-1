import React, { Suspense } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "../store/index";

import { Route, Switch } from "react-router-dom";
import Header from "./header-component/Header";
//pages

const HomePage = React.lazy(() =>
  import("../pages/HomePage-component/HomePage")
);
const JobPage = React.lazy(() => import("../pages/JobPage-component/JobPage"));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/jobs" component={JobPage} />
          </Switch>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
