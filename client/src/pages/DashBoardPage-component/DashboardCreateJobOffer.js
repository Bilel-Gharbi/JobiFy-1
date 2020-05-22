import React, { useState, useEffect } from "react";
import FormAddJobOffer from "./FormAddJobOffer";
import JobOfferAddSkills from "./JobOfferAddSkills";

const DashboardCreateJobOffer = () => {
  const [step, setStep] = useState(1);
  const [jobOffer, setJobOffer] = useState();

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <FormAddJobOffer setStep={setStep} setJobOffer={setJobOffer} />
          </>
        );
      case 2:
        return (
          <>
            <JobOfferAddSkills setStep={setStep} jobOffer={jobOffer} />
          </>
        );
      default:
        return (
          <>
            <FormAddJobOffer setStep={setStep} setJobOffer={setJobOffer} />
          </>
        );
    }
  };

  return <>{renderForm()}</>;
};

export default DashboardCreateJobOffer;
