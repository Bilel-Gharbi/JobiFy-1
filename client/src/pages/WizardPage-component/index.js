import React from "react";

import WizardMenu from "./WizardMenu";
import WizardBody from "./WizardBody";
import WizardButtons from "./WizardButtons";

const WizardPage = () => {
  return (
    <div
      className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app"
      style={{ display: "grid" }}
    >
      <WizardMenu />
      <WizardBody />
      <br />
      <br />
      <WizardButtons />
    </div>
  );
};

export default WizardPage;
