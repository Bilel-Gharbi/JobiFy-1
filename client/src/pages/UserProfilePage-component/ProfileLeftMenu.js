import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfileDescription from "./UserProfileDescription";
import MenuProfileList from "./MenuProfileList";

class ProfileLeftMenu extends Component {
  state = { list: [] };

  componentDidMount() {
    this.setState({
      list: [
        {
          section: "Experiences",
          nb: this.props.resume.experiences.length,
          icon: "flaticon2-shopping-cart",
        },
        {
          section: "Educations",
          nb: this.props.resume.educations.length,
          icon: "flaticon2-file",
        },
        {
          section: "Certifications",
          nb: this.props.resume.certificates.length,
          icon: "flaticon2-rocket",
        },
        {
          section: "Projects",
          nb: this.props.resume.projects.length,
          icon: "flaticon2-rocket",
        },
        {
          section: "Awards",
          nb: this.props.resume.awards.length,
          icon: "flaticon2-rocket",
        },
        {
          section: "Skills",
          nb: this.props.resume.skills.length,
          icon: "flaticon2-layers",
        },
        {
          section: "Languages",
          nb: this.props.resume.languages.length,
          icon: "flaticon2-rocket",
        },
        {
          section: "Interests",
          nb: this.props.resume.interests.length,
          icon: "flaticon2-rocket",
        },
        {
          section: "Applied Jobs",
          nb: this.props.resume.applyedJob.length,
          icon: "flaticon2-rocket",
        },
      ],
    });
  }
  render() {
    return (
      <div className="kt-grid__item kt-app__toggle kt-app__aside">
        {/*begin:: Widgets/Applications/User/Profile1*/}
        <div className="kt-portlet ">
          <div className="kt-portlet__head  kt-portlet__head--noborder">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title"> profile </h3>
            </div>
          </div>

          {/*begin::Widget */}
          <div className="kt-portlet__body kt-portlet__body--fit-y">
            <div className="kt-widget kt-widget--user-profile-1">
              <UserProfileDescription data={this.props.userInfo} />
              <MenuProfileList list={this.state.list} />
            </div>
          </div>
          {/*end::Widget */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.userProfile.user,
    resume: state.userProfile.resume,
  };
};

export default connect(mapStateToProps)(ProfileLeftMenu);
