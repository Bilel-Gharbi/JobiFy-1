import React from "react";

import "./JobSkillsList.css";

const JobSkillsList = ({ jobSkills }) => {
  if (jobSkills) {
    return jobSkills.map(skill => {
      return (
        <span className="skill" key={skill.id}>
          <strong>{skill.name} </strong>
        </span>
      );
    });
  } else return <div>loading ... </div>;
};

export default JobSkillsList;
