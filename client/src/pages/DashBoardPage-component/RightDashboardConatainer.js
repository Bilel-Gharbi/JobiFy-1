import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/comapny";

import FormCompanyUpdateInfo from "./FromCompanyUpdateInfo";
import FormChangePwd from "../../components/FormChangePwd";

import DashboardJobOffersList from "./DashboardJobOffersList";
import DashboardCandidateList from "./DashboardCandidateList";
import DashboardCreateJobOffer from "./DashboardCreateJobOffer";
import DashboardHome from "./DashboardHome";

const RightDashboardConatainer = ({ elementToRender, ...props }) => {
  const renderContent = () => {
    switch (elementToRender) {
      case "Create job offer":
        return <DashboardCreateJobOffer />;

      case "jobOfferList":
        return <DashboardJobOffersList jobs={props.companyJobs} />;
      case "Candidate":
        return <DashboardCandidateList />;
      case "changePwd":
        return (
          <div
            className="kt-portlet"
            style={{ padding: "40px 120px 0px 120px", height: "100%" }}
          >
            <FormChangePwd email={props.email} />
          </div>
        );

      case "compnayInfo":
        return (
          <div
            className="kt-portlet"
            style={{ padding: "30px 120px 0px 120px", height: "100%" }}
          >
            <FormCompanyUpdateInfo
              data={props.companyInfo}
              action={props.createCompanyProfileInfo}
            />
          </div>
        );
      case "Home":
        return (
          <div className="kt-portlet" style={{ padding: "5%", height: "100%" }}>
            <DashboardHome
              data={props.companyInfo}
              action={props.createCompanyProfileInfo}
              setElementToRender={props.setElementToRender}
            />
          </div>
        );

      default:
        return (
          <div className="kt-portlet" style={{ padding: "5%", height: "100%" }}>
            <DashboardHome
              data={props.companyInfo}
              action={props.createCompanyProfileInfo}
              setElementToRender={props.setElementToRender}
            />
          </div>
        );
    }
  };
  return (
    <div
      className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
      style={{ flex: "5", marginLeft: "2%" }}
    >
      {renderContent()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    companyJobs: state.companyProfile.jobOffers,
    companyInfo: state.companyProfile.company,
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { ...actions })(
  RightDashboardConatainer
);
