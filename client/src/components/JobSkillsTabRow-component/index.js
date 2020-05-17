import React from "react";

const JobSkillsTabRow = ({
  detailsSkills,
  jobSkillIdToRender,
  job,
  ...props
}) => {
  return (
    <tr
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      }}
    >
      {detailsSkills &&
      job.id === jobSkillIdToRender &&
      job.jobSkills.length > 0 ? (
        <React.Fragment>
          {job.jobSkills.map((skill) => {
            return (
              <React.Fragment key={skill.id}>
                <td
                  style={{
                    padding: "5px",
                    background: "rgba(39, 134, 251, 0.1)",
                    minWidth: "150px",
                    margin: "5px 10px",
                  }}
                >
                  <span
                    style={{
                      color: "#2786fb",
                      fontWeight: "bold",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      margin: "0px 3px 0px 0px",
                      position: "relative",
                    }}
                  >
                    <a
                      className="fa flaticon-cancel"
                      onClick={() => props.deleteSkillAction(skill.id, job.id)}
                      style={{
                        position: "absolute",
                        right: "-3px",
                        top: "-4%",
                        cursor: "pointer",
                      }}
                    />
                    {skill.name}
                  </span>
                </td>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ) : null}
    </tr>
  );
};

export default JobSkillsTabRow;
