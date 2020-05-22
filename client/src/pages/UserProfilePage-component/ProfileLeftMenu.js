import React, { Component } from "react";
import { connect } from "react-redux";

const UserProfileDescription = React.lazy(() =>
  import("./UserProfileDescription")
);
const MenuProfileList = React.lazy(() => import("./MenuProfileList"));

class ProfileLeftMenu extends Component {
  state = {
    list: [],
  };

  //setup left menu
  componentWillMount() {
    this.setState({
      list: [
        {
          section: "Experiences",
          nb: this.props.resume && this.props.resume.experiences.length,
          //nb: 4,
          icon: "flaticon2-graphic",
        },
        {
          section: "Educations",
          nb: this.props.resume && this.props.resume.educations.length,
          //nb: 4,
          icon: "flaticon2-indent-dots",
        },
        {
          section: "Certifications",
          nb: this.props.resume && this.props.resume.certificates.length,
          //nb: 4,
          icon: "flaticon2-list-2",
        },
        {
          section: "Projects",
          nb: this.props.resume && this.props.resume.projects.length,
          //nb: 5,
          icon: "flaticon2-analytics-2",
        },
        {
          section: "Awards",
          nb: this.props.resume && this.props.resume.awards.length,
          icon: "flaticon-medal",
        },
        {
          section: "Skills",
          nb: this.props.resume && this.props.resume.skills.length,
          //nb: 5,
          icon: "flaticon2-soft-icons",
        },
        {
          section: "Languages",
          nb: this.props.resume && this.props.resume.languages.length,
          //nb: 5,
          icon: "flaticon2-open-text-book",
        },
        {
          section: "Interests",
          nb: this.props.resume && this.props.resume.interests.length,
          // nb: 5,
          icon: "flaticon2-rocket",
        },
        /* {
          section: "Applied Jobs",
          //nb: this.props.resume.applyedJob.length,
          nb: 5,
          icon: "flaticon2-rocket",
        }, */
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
              <UserProfileDescription
                data={this.props.userInfo}
                email={this.props.email}
                resume={this.props.resume}
              />
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
    email: state.auth.email,
  };
};

export default connect(mapStateToProps)(ProfileLeftMenu);
