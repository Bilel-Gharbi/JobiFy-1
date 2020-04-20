import React, { useRef } from "react";
import { connect } from "react-redux";
import * as resumeActions from "../../actions/resumeAction";

import formProps from "./formCrudResume";

const PersonalInformationCart = React.lazy(() =>
  import("./PersonalInformationCart")
);
const EducationCartList = React.lazy(() =>
  import("../../components/EducationsCartList-component/EducationCartList")
);
const LanguagesCartList = React.lazy(() =>
  import("../../components/LanguagesCartList-compoenent/LanguagesCartList")
);
const ExperienceCartList = React.lazy(() =>
  import("../../components/ExperiencesCartLIst-component/ExperienceCartList")
);
const ProjectCartList = React.lazy(() =>
  import("../../components/ProjectCardList-component/ProjectCartList")
);
const AwardCartList = React.lazy(() =>
  import("../../components/AwardCartList-component/AwardCartList")
);
const SkillsCartList = React.lazy(() =>
  import("../../components/SkillsCartList-component/SkillsCartList")
);
const InterestCartList = React.lazy(() =>
  import("../../components/InterestsCartList-component/InterestCartList")
);
const CertificationCartList = React.lazy(() =>
  import(
    "../../components/CertificationsCartList-component/CertificationsCartList"
  )
);

const ButtonModalProfil = React.lazy(() =>
  import("../../components/common/ButtonModalProfil-component")
);
const Modal = React.lazy(() =>
  import("../../components/common/modal-component/Modal")
);
const Form = React.lazy(() =>
  import("../../components/common/Form-component/Form")
);

const ProfileRightDetails = ({
  selectedMenuSection,
  resume,
  userInfo,
  ...props
}) => {
  const formRef = useRef();

  const renderContent = () => {
    switch (selectedMenuSection) {
      case "Experiences":
        return (
          <ExperienceCartList
            data={resume.experiences}
            selectedMenuSection={selectedMenuSection}
            deleteExperience={props.deleteExperience}
            updateExperience={props.updateExperience}
          />
        );
      case "Educations":
        return (
          <EducationCartList
            data={resume.educations}
            selectedMenuSection={selectedMenuSection}
            deleteEducation={props.deleteEducation}
            updateEducation={props.updateEducation}
          />
        );
      case "Certifications":
        return (
          <CertificationCartList
            data={resume.certificates}
            selectedMenuSection={selectedMenuSection}
            deleteCertificate={props.deleteCertificate}
            updateCertificate={props.updateCertificate}
          />
        );
      case "Projects":
        return (
          <ProjectCartList
            data={resume.projects}
            selectedMenuSection={selectedMenuSection}
            deleteProject={props.deleteProject}
          />
        );
      case "Awards":
        return (
          <AwardCartList
            data={resume.awards}
            selectedMenuSection={selectedMenuSection}
            deleteAward={props.deleteAward}
            updateAward={props.updateAward}
          />
        );
      case "Interests":
        return (
          <InterestCartList
            data={resume.interests}
            selectedMenuSection={selectedMenuSection}
            deleteInterest={props.deleteInterest}
          />
        );
      case "Languages":
        return (
          <LanguagesCartList
            data={resume.languages}
            selectedMenuSection={selectedMenuSection}
            deleteLanguage={props.deleteLanguage}
          />
        );
      case "Skills":
        return (
          <SkillsCartList
            data={resume.skills}
            selectedMenuSection={selectedMenuSection}
            deleteSkill={props.deleteSkill}
          />
        );

      default:
        return <PersonalInformationCart data={userInfo} />;
    }
  };
  const renderModalButton = () => {
    //const { selectedMenuSection } = this.props;
    switch (selectedMenuSection) {
      case "Experiences":
      case "Educations":
      case "Certifications":
      case "Projects":
      case "Awards":
        return (
          <Modal
            customButton={<ButtonModalProfil />}
            modalName={selectedMenuSection}
            btnOne="add experience"
            body={<Form ref={formRef} {...formProps[selectedMenuSection]} />}
          />
        );
      case "Interests":
      case "Languages":
      case "Skills":
        return null;

      default:
        return null;
    }
  };
  return (
    <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
      <div className="row">
        <div className="col-xl-12">
          <div className="kt-portlet">
            <div className="kt-portlet__head">
              <div className="kt-portlet__head-label">
                <h3 className="kt-portlet__head-title">
                  {selectedMenuSection || "Personal Information"}
                  <small>
                    {"update your " +
                      (selectedMenuSection || "personal information")}
                  </small>
                </h3>
              </div>

              <div style={{ alignItems: "center", display: "flex" }}>
                {renderModalButton()}
              </div>
            </div>

            <div className="kt-portlet__body" style={{ padding: "0px" }}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMenuSection: state.UI.profileSection,
    resume: state.userProfile.resume,
    userInfo: state.userProfile.user,
  };
};
export default connect(mapStateToProps, { ...resumeActions })(
  ProfileRightDetails
);
