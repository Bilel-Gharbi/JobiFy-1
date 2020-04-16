import React, { Component } from "react";
import { connect } from "react-redux";

import PersonalInformationCart from "./PersonalInformationCart";
import EducationCartList from "../../components/EducationsCartList-component/EducationCartList";
import LanguagesCartList from "../../components/LanguagesCartList-compoenent/LanguagesCartList";
import ExperienceCartList from "../../components/ExperiencesCartLIst-component/ExperienceCartList";
import ProjectCartList from "../../components/ProjectCardList-component/ProjectCartList";
import AwardCartList from "../../components/AwardCartLIst-component/AwardCartList";
import SkillsCartList from "../../components/SkillsCartList-component/SkillsCartList";
import InterestCartList from "../../components/InterestsCartLIst-component/InterestCartList";
import CertificationCartList from "../../components/CertificationsCartLIst-component/CertificationsCartList";

class ProfileRightDetails extends Component {
  renderContent = () => {
    switch (this.props.selectedMenuSection) {
      case "Experiences":
        return <ExperienceCartList data={this.props.resume.experiences} />;
      case "Educations":
        return <EducationCartList data={this.props.resume.educations} />;
      case "Certifications":
        return <CertificationCartList data={this.props.resume.certificates} />;
      case "Projects":
        return <ProjectCartList data={this.props.resume.projects} />;
      case "Awards":
        return <AwardCartList data={this.props.resume.awards} />;
      case "Interests":
        return <InterestCartList data={this.props.resume.interests} />;
      case "Languages":
        return <LanguagesCartList data={this.props.resume.languages} />;
      case "Skills":
        return <SkillsCartList data={this.props.resume.skills} />;

      default:
        return <PersonalInformationCart data={this.props.userInfo} />;
    }
  };
  render() {
    console.log(this.props);

    return (
      <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
        <div className="row">
          <div className="col-xl-12">
            <div className="kt-portlet">
              <div className="kt-portlet__head">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title">
                    {this.props.selectedMenuSection || "Personal Information"}
                    <small>
                      update your
                      {this.props.selectedMenuSection ||
                        " personal information"}
                    </small>
                  </h3>
                </div>
                <div className="kt-portlet__head-toolbar">
                  <div className="kt-portlet__head-wrapper">
                    <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
                      <i className="flaticon2-add" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="kt-portlet__body" style={{ padding: "0px" }}>
                {this.renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedMenuSection: state.UI.profileSection,
    resume: state.userProfile.resume,
    userInfo: state.userProfile.user,
  };
};
export default connect(mapStateToProps)(ProfileRightDetails);
