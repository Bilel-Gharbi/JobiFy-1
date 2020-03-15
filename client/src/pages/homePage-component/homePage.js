import React, { Component } from "react";

import { connect } from "react-redux";
import { fetechJobs } from "../../actions/jobsAction";

//inside page component import reusable component and used inside the page component
class HomePage extends Component {
  state = {};
  componentDidMount() {
    this.props.fetechJobs();
  }
  render() {
    console.log(this.props);
    return <div>this is home page Component that contain many component</div>;
  }
}
const mapStateToprops = state => {
  return {
    jobs: state.jobs
  };
};
export default connect(mapStateToprops, { fetechJobs })(HomePage);
