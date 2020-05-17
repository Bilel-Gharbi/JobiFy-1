import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/comapny";
import companyAPI from "../../API/comapnyAPI";
import axios from "axios";

import * as _ from "underscore";

import Select from "react-select";
import CandidateListTable from "./CandidateListTable";

import { jobMatch } from "../../helper";

const DashbordCandidateList = (props) => {
  const [resumesTabSkills, setResumesTabSkills] = useState([]);
  const [jobsTabSkills, setJobsTabSkills] = useState([]);
  const [matchingArray, setMatchingArray] = useState([]);

  useEffect(() => {
    if (props.company) {
      props.fetchCompanyJobOfferApplications(props.company.id);
    }
  }, []);

  const options = [
    { value: "pendding", label: "pendding" },
    { value: "accepted", label: "accepted" },
    { value: "rejected", label: "rejected" },
  ];

  /* const setMatchingRate = () => {
    let jobsId = props.applications.map((app) => app.JobOfferId);
    let resumesId = props.applications.map((app) => app.ResumeId);

    let obj1 = {};
    let obj2 = {};

    resumesId.map(async (id, index) => {
      let resumeTab = await companyAPI.get(`applications/resume/${id}`);
      let skills = resumeTab.data.resumeCandidate.skills;
      obj1[index] = skills;
    });

    jobsId.map(async (id, index) => {
      let jobTab = await axios.get(
        `http://localhost:5000/api/company/${props.company.id}/jobOffer/${id}/skills`
      );
      let skills = jobTab.data.data;
      obj2[index] = skills;
    });
    setResumesTabSkills(obj1);
    setJobsTabSkills(obj2);

    let result = _.map(resumesTabSkills, (el, i) =>
      jobMatch(resumesTabSkills[i], jobsTabSkills[i])
    );
    console.log(result);
    //return result;
    return setMatchingArray([...result]);
  }; */
  return (
    <div>
      <div
        className="kt-portlet"
        /* style={{ padding: "5%" }} */
        //onClick={setMatchingRate}
        //onChange={() => setMatchingRate()}
      >
        <div className="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded">
          <>
            <div className="kt-portlet__body">
              {/*begin: Search Form */}
              <div className="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
                <div className="row align-items-center">
                  <div style={{ width: "100%" }}>
                    <div className="row align-items-center">
                      <div className="col-md-7 ">
                        <div className="kt-input-icon kt-input-icon--left">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search by candidate or job "
                          />
                          <span className="kt-input-icon__icon kt-input-icon__icon--left">
                            <span>
                              <i className="la la-search" />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="col-md-5 ">
                        <div className="kt-form__group kt-form__group--inline">
                          <div className="kt-form__label"></div>
                          <div className="kt-form__control">
                            <Select
                              name="jobContractType"
                              placeholder="Filter status "
                              //value={selectValue.value}
                              options={options}
                              //onChange={handleSelectChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end: Search Form */}
          </>
          <>
            <CandidateListTable
              applications={props.applications}
              matchingArr={matchingArray}
              setMatchingRate={props.setMatchingRate}
            />
          </>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    applications: state.companyProfile.applications,
    company: state.companyProfile.company,
  };
};

export default connect(mapStateToProps, { ...actions })(DashbordCandidateList);
