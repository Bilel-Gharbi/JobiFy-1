import React from "react";

const JobSkillTag = ({ jobSkill }) => {
  return (
    <div
      className="kt-widget__details"
      style={{ width: "100%", margin: "0px" }}
    >
      <span
        className="btn btn-label-brand btn-sm btn-bold btn-upper"
        style={{ width: "100%" }}
      >
        {jobSkill}
      </span>
    </div>
  );
};

export default JobSkillTag;
