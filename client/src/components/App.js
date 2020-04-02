import React, { Suspense } from "react";
import "./App.css";

import { Provider, connect } from "react-redux";
import store from "../store/index";
import { fetechUserData } from "../actions/auth";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

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

class App extends React.Component {
  state = {
    isLoged: null
  };
  componentDidMount() {
    let token = store.getState().auth.token;
    if (token) {
      store.dispatch(fetechUserData(token));
    }
  }
  componentWillReceiveProps() {
    this.setState({ isLoged: this.props.auth.isLoged });
  }

  render() {
    return (
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <>
              <div className="mainContainer">
                <Route exact path="/" component={HomePage} />
                <Route
                  exact
                  path="/auth"
                  render={() =>
                    this.state.isLoged ? <Redirect to="/" /> : <AuthPage />
                  }
                />
                <Route exact path="/info" component={InfoPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/dashboard" component={DashBoardPage} />
                <Route exact path="/jobs" component={JobPage} />
              </div>
            </>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(App);
