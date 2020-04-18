import React, { useRef } from "react";
import { connect } from "react-redux";

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
  import("../../components/AwardCartLIst-component/AwardCartList")
);

const SkillsCartList = React.lazy(() =>
  import("../../components/SkillsCartList-component/SkillsCartList")
);

const InterestCartList = React.lazy(() =>
  import("../../components/InterestsCartList-component/InterestCartList")
);

const CertificationCartList = React.lazy(() =>
  import(
    "../../components/CertificationsCartLIst-component/CertificationsCartList"
  )
);

const ButtonModalProfil = React.lazy(() => import("./ButtonModalProfil"));
const Modal = React.lazy(() =>
  import("../../components/common/modal-component/Modal")
);
const Form = React.lazy(() =>
  import("../../components/common/Form-component/Form")
);

const ProfileRightDetails = ({ selectedMenuSection, resume, userInfo }) => {
  const formRef = useRef();

  const renderContent = () => {
    switch (selectedMenuSection) {
      case "Experiences":
        return <ExperienceCartList data={resume.experiences} />;
      case "Educations":
        return <EducationCartList data={resume.educations} />;
      case "Certifications":
        return <CertificationCartList data={resume.certificates} />;
      case "Projects":
        return <ProjectCartList data={resume.projects} />;
      case "Awards":
        return <AwardCartList data={resume.awards} />;
      case "Interests":
        return (
          <InterestCartList
            data={resume.interests}
            selectedMenuSection={selectedMenuSection}
          />
        );
      case "Languages":
        return (
          <LanguagesCartList
            data={resume.languages}
            selectedMenuSection={selectedMenuSection}
          />
        );
      case "Skills":
        return (
          <SkillsCartList
            data={resume.skills}
            selectedMenuSection={selectedMenuSection}
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

              {/* <div className="kt-portlet__head-toolbar">
                  <div
                    className="kt-portlet__head-wrapper"
                    onClick={() => console.log("hello")}
                  >
                    <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
                      <i className="flaticon2-add" />
                    </button>
                  </div>
                </div> */}
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
export default connect(mapStateToProps)(ProfileRightDetails);
