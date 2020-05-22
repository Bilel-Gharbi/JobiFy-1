import React from "react";

import DashboardJobOffersList from "./DashboardJobOffersList";
import DashboardCandidateList from "./DashboardCandidateList";
import DashboardCreateJobOffer from "./DashboardCreateJobOffer";

const RightDashboardConatainer = ({ elementToRender }) => {
  const renderContent = () => {
    switch (elementToRender) {
      case "Create job offer":
        return <DashboardCreateJobOffer />;
      case "jobOfferList":
        return <DashboardJobOffersList />;
      case "Candidate":
        return <DashboardCandidateList />;
      case "Somthing Else":
        return "<h3> Somthing Else </h3>";
      default:
        return <DashboardCreateJobOffer />;
    }
  };
  return (
    <div
      className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
      style={{ flex: "2", marginLeft: "2%" }}
    >
      {renderContent()}
    </div>
  );
};

export default RightDashboardConatainer;
