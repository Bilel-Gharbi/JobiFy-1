import React, { useState, useEffect } from "react";
import companyAPI from "../../API/comapnyAPI";

import CandidateProfileOverView from "./CandidateProfileOverView";
import CandidateExperience from "./CandidateExperience";
import CandidateEducationsAndCertification from "./CandidateEducationsAndCertification";
import CandidateProjectsAndAwards from "./CandidateProjectsAndAwards";

const DetailsCandidateResume = ({ data }) => {
  const [resumeState, setResumeState] = useState();
  const [content, setContent] = useState();

  const fetchResumeCandidate = async (resumeId) => {
    const response = await companyAPI.get(`applications/resume/${resumeId}`);
    setResumeState(response.data.resumeCandidate);
    //console.log(response.data.resumeCandidate);
  };

  useEffect(() => {
    fetchResumeCandidate(data.ResumeId);
  }, []);
  const renderContent = () => {
    switch (content) {
      case 1:
        return <CandidateProfileOverView data={resumeState} job={data} />;
      case 2:
        return <CandidateExperience data={resumeState.experiences} />;
      case 3:
        return (
          <CandidateEducationsAndCertification
            educations={resumeState.educations}
            certifications={resumeState.certificates}
          />
        );
      case 4:
        return (
          <CandidateProjectsAndAwards
            awards={resumeState.awards}
            projects={resumeState.projects}
          />
        );

      default:
        return <CandidateProfileOverView data={resumeState} job={data} />;
    }
  };
  return (
    <>
      <div className="kt-portlet kt-portlet--tabs">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-toolbar">
            <ul
              className="nav nav-tabs nav-tabs-line nav-tabs-line-brand nav-tabs-line-2x nav-tabs-line-right nav-tabs-bold"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-selected="true"
                  onClick={() => setContent(1)}
                >
                  <i
                    className="flaticon2-heart-rate-monitor"
                    aria-hidden="true"
                  />
                  Profile overview
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#"
                  aria-selected="false"
                  onClick={() => setContent(2)}
                >
                  <i
                    className="flaticon2-heart-rate-monitor"
                    aria-hidden="true"
                  />
                  Experiences
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#"
                  aria-selected="false"
                  onClick={() => setContent(3)}
                >
                  <i className="flaticon2-pie-chart-2" aria-hidden="true" />
                  Educations and Certification
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#"
                  aria-selected="false"
                  onClick={() => setContent(4)}
                >
                  <i className="flaticon2-chronometer" aria-hidden="true" />
                  Projects and Awards
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="tab-content">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default DetailsCandidateResume;
