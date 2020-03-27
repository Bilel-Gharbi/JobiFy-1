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
const InfoPage = React.lazy(() =>
  import("../pages/InfoPage-component/InfoPage")
);
const ProfilePage = React.lazy(() =>
  import("../pages/ProfilePage-component/ProfilePage")
);
const DashBoardPage = React.lazy(() =>
  import("../pages/DashBoardPage-component/DashBoardPage")
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/info" component={InfoPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/dashboard" component={DashBoardPage} />
            <Route exact path="/jobs" component={JobPage} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
