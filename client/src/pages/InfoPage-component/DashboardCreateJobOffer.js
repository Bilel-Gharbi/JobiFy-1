import React, { useState, useEffect } from "react";
import FormAddJobOffer from "./FormAddJobOffer";
import JobOfferAddSkills from "./JobOfferAddSkills";

const DashboardCreateJobOffer = () => {
  const [step, setStep] = useState(0);

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <FormAddJobOffer setStep={setStep} />
          </>
        );
      case 2:
        return (
          <>
            <JobOfferAddSkills setStep={setStep} />
          </>
        );
      default:
        return (
          <>
            <JobOfferAddSkills setStep={setStep} />
          </>
        );
    }
  };

  return <>{renderForm()}</>;
};

export default DashboardCreateJobOffer;
