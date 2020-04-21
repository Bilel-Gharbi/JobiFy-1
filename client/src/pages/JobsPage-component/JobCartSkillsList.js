import React from "react";
import JobSkillTag from "./JobSkillTag";
const JobCartSkillsList = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <div key={skill.id}>
            <JobSkillTag jobSkill={skill.name} />
          </div>
        );
      })}
    </>
  );
};

export default JobCartSkillsList;
