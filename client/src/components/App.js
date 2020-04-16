import React, { Suspense } from "react";
import "./App.css";

import { connect } from "react-redux";
import store from "../store/index";
import { fetechUserData } from "../actions/auth";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

/* import Header from "./header-component/Header";
import NewHeader from "./test-component/NewHeader"; */

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
const UserProfilePage = React.lazy(() =>
  import("../pages/UserProfilePage-component")
);
const DashBoardPage = React.lazy(() =>
  import("../pages/DashBoardPage-component/DashBoardPage")
);

const Header = React.lazy(() => import("./header-component/Header"));

const NewHeader = React.lazy(() =>
  import("../components/test-component/NewHeader")
);

class App extends React.Component {
  state = {
    isLoged: this.props.auth.isLoged,
  };
  componentDidMount() {
    let token = store.getState().auth.token;
    if (token) {
      store.dispatch(fetechUserData(token));
    }
    console.log(this.props);
  }
  /* componentWillReceiveProps() {
    this.setState({ isLoged: this.props.auth.isLoged });
  } */

  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <NewHeader />
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
                <Route exact path="/profile" component={UserProfilePage} />
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
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(App);
