import React, { Component } from "react";
import { connect } from "react-redux";

import ProfileResumeMenu from "../../components/ProfileResumeMenu-component/ProfileResumeMenu";

class ProfilePage extends Component {
  renderProfileMenu = () => {
    //TODO: check profile type before for User or company
    if (this.props.profile.resume) {
      const resumeSections = Object.keys(this.props.profile.resume).slice(1);
      return <ProfileResumeMenu menu={resumeSections} />;
    }
    return <h3> loading ... </h3>;
  };

  render() {
    return (
      <div>
        <div>profile Page</div>
        {this.renderProfileMenu()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.userProfile
  };
};

export default connect(mapStateToProps, null)(ProfilePage);
