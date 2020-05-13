import React from "react";

import Tag from "../../components/common/Tag-component";

const JobSkillsTabRow = ({ detailsSkills, jobSkillIdToRender, job }) => {
  return (
    <>
      {detailsSkills &&
      job.id === jobSkillIdToRender &&
      job.jobSkills.length > 0 ? (
        <tr className="kt-datatable__row" style={{ display: "flex" }}>
          {job.jobSkills.map((skill) => {
            return (
              <td
                key={Math.floor(Math.random() * job.id)}
                className="kt-datatable__cell"
                style={{ minWidth: "150px" }}
              >
                <Tag
                  deleteButton={true}
                  action={() => console.log("delete button skills")}
                >
                  {skill.name}
                </Tag>
              </td>
            );
          })}
        </tr>
      ) : null}
    </>
  );
};

export default JobSkillsTabRow;
