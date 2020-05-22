import React, { useEffect, useState } from "react";
import axios from "axios";
import { jobMatch } from "../../helper";
import Tag from "../../components/common/Tag-component";
import { Doughnut } from "react-chartjs-2";

const CandidateProfileOverView = ({ data, job }) => {
  const [matching, setMatching] = useState("no skills");

  const setMatchingRate = async () => {
    let jobTabSkills = await axios.get(
      `http://localhost:5000/api/company/${job.JobOffer.CompanyId}/jobOffer/${job.JobOffer.id}/skills`
    );

    setMatching(jobMatch(data.skills, jobTabSkills.data.data));
  };

  useEffect(() => {
    if (data && data.skills) setMatchingRate();
  }, [data]);

  return (
    <>
      <div className="kt-widget4">
        <div className="kt-widget4__item" style={{ display: "flex" }}>
          {data ? (
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [matching, 100 - matching],
                    backgroundColor: ["#2FDE00", "red"],
                  },
                ],
                labels: ["matchig Rate", "unMatching"],
              }}
              options={{
                title: {
                  display: true,
                  text: ` ${matching} % Matching `,
                  fontSize: 20,
                },
                legend: false,
                maintainAspectRatio: false,
                responsive: true,
              }}
            />
          ) : null}
        </div>
        <div className="kt-widget4__item" style={{ display: "flex" }}>
          <span className="kt-widget4__icon" style={{ flex: 1 }}>
            <i className="flaticon2-user kt-font-primary" />
          </span>
          <div style={{ display: "grid", flex: 28 }}>
            <a className="kt-widget4__title kt-widget4__title--light">
              <strong>Expertise : </strong>{" "}
              {data && data.userResume ? data.userResume.expertiseLevel : null}
            </a>
            <a className="kt-widget4__title kt-widget4__title--light">
              <strong>Summary : </strong>{" "}
              {data && data.userResume ? data.userResume.summary : null}
            </a>
          </div>
        </div>
        {data && data.languages.length ? (
          <div className="kt-widget4__item" style={{ display: "flex" }}>
            <span className="kt-widget4__icon" style={{ flex: 1 }}>
              <i className="flaticon-earth-globe kt-font-primary" />
            </span>
            <div
              style={{
                flex: 28,
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(100px, 150px) )",
                gridGap: "10px",
              }}
            >
              {data.languages.map((language, i) => (
                <Tag key={i} style={{ margin: "0 10px" }}>
                  {language.name}
                </Tag>
              ))}
            </div>
          </div>
        ) : null}

        <div className="kt-widget4__item" style={{ display: "flex" }}>
          <span className="kt-widget4__icon" style={{ flex: 1 }}>
            <i className="flaticon2-menu kt-font-primary" />
          </span>
          <div
            style={{
              flex: 28,
              display: "grid",
              gridTemplateColumns: "repeat( auto-fit, minmax(100px, 150px) )",
              gridGap: "10px",
            }}
          >
            {data &&
              data.skills.map((skill, i) => <Tag key={i}>{skill.name}</Tag>)}
          </div>
        </div>
        {data && data.interests.length ? (
          <div className="kt-widget4__item" style={{ display: "flex" }}>
            <span className="kt-widget4__icon" style={{ flex: 1 }}>
              <i className="flaticon-earth-globe kt-font-primary" />
            </span>
            <div
              style={{
                flex: 28,
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(100px, 150px) )",
                gridGap: "10px",
              }}
            >
              {data.interests.map((interest, i) => (
                <Tag key={i}>{interest.name}</Tag>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CandidateProfileOverView;
