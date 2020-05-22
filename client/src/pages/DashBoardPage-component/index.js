import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import RightDashboardConatainer from "./RightDashboardConatainer";

const DashBoardPage = ({ history, isActive, userType, isLoged }) => {
  const [elementToRender, setElementToRender] = useState();

  useEffect(() => {
    if (!isActive && userType === "COMPANY") history.push("/info");
    if (!isLoged) history.push("/auth");
  }, [isLoged, isActive]);

  return (
    <>
      <div style={{ display: "flex", height: "100%", marginTop: "10%" }}>
        <LeftMenu setElementToRender={setElementToRender} />
        <RightDashboardConatainer
          elementToRender={elementToRender}
          setElementToRender={setElementToRender}
        />
      </div>
    </>
  );
};

const mapsStateToProps = (state) => {
  if (state.auth.isLoged) {
    return {
      isLoged: state.auth.isLoged,
      isActive: state.companyProfile.company.active,
      userType: state.auth.userType,
    };
  }
  return state;
};

export default withRouter(connect(mapsStateToProps, null)(DashBoardPage));
