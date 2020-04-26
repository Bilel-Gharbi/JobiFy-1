import React from "react";
import ReCAPTCHA from "react-recaptcha";

const ReCapatcha = ({ verifyCallback }) => {
  return (
    <ReCAPTCHA
      sitekey="6Lf86-wUAAAAAAI3ufzzSnHdWI79PoYcJnLxa-EP"
      render="explicit"
      verifyCallback={verifyCallback}
    />
  );
};

export default ReCapatcha;
