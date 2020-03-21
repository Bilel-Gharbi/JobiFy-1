import React, { Suspense } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "../store/index";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./header-component/Header";
//pages

const HomePage = React.lazy(() =>
  import("../pages/HomePage-component/HomePage")
);
const JobPage = React.lazy(() => import("../pages/JobPage-component/JobPage"));
const AuthPage = React.lazy(() =>
  import("../pages/authPage-component/AuthPage")
);

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/jobs" component={JobPage} />
            <Route exact path="/login" component={AuthPage} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
