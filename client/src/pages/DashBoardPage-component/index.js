import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import RightDashBordConatainer from "./RightDashBordConatainer";

const DashBoardPage = ({ history, isActive, userType, isLoged }) => {
  const [elementToRender, setElementToRender] = useState();

  useEffect(() => {
    if (!isActive && userType === "COMPANY") history.push("/info");
    if (!isLoged) history.push("/auth");
  }, []);

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <LeftMenu setElementToRender={setElementToRender} />
        <RightDashBordConatainer elementToRender={elementToRender} />
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
};

export default withRouter(connect(mapsStateToProps, null)(DashBoardPage));
