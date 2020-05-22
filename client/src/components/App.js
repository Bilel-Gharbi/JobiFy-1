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

import SpinnerLoader from "../components/common/Spinner-component";

//pages
const HomePage = React.lazy(() =>
  import("../pages/HomePage-component/HomePage")
);

//const JobPage = React.lazy(() => import("../pages/JobPage-component/JobPage"));
const AuthPage = React.lazy(() => import("../pages/AuthPage-component"));
const InfoPage = React.lazy(() =>
  import("../pages/InfoPage-component/InfoPage")
);
const UserProfilePage = React.lazy(() =>
  import("../pages/UserProfilePage-component")
);
const DashBoardPage = React.lazy(() =>
  import("../pages/DashBoardPage-component")
);
const WizardPage = React.lazy(() => import("../pages/WizardPage-component/"));

const Header = React.lazy(() => import("./Header-component"));

const JobsPage = React.lazy(() => import("../pages/JobsPage-component"));

class App extends React.Component {
  //changed from didmount to willMount
  componentWillMount() {
    let token = store.getState().auth.token;
    // let token = localStorage.getItem("token");
    if (token) {
      store.dispatch(fetechUserData(token));
    }
    //set savedJobs Array ;
    let savedJobs = localStorage.getItem("savedJobs");
    if (!savedJobs) {
      localStorage.setItem("savedJobs", "[]");
    }
  }

  /* renderRouteOrRedirect = (condition, routeDirection, otherRoute) => {
 
    return condition ? (
      <Redirect to={`${routeDirection}`} />
    ) : (
      <Redirect to={`${otherRoute}`} />
    );
  }; */
  render() {
    const { isLoged } = this.props;
    return (
      <Router>
        <Suspense fallback={<SpinnerLoader />}>
          <Header />
          {/*      <NewHeader /> */}
          <Switch>
            <>
              <div className="mainContainer">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/auth" component={AuthPage} />
                <Route exact path="/info" component={WizardPage} />
                <Route exact path="/profile" component={UserProfilePage} />
                <Route exact path="/dashboard" component={DashBoardPage} />
                <Route exact path="/jobsPage" component={JobsPage} />
                <Route exact path="/test" component={InfoPage} />
              </div>
            </>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoged: state.auth.isLoged,
  };
};

export default connect(mapStateToProps, null)(App);
