import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/comapny";

import Btn from "../../components/common/ModalDashboard-component/ModalDashboard";
import JobSkillsTabRow from "./JobSkillsTabRow";

import {
  AddSkillModalForm,
  UpdateJobOfferForm,
  ConfirmationModalForm,
} from "./ModalForms";
import {
  DeleteButton,
  AddButton,
  UpdateButton,
} from "../../components/common/SVG-Buttons";

const JobOfferListTable = ({ jobs, ...props }) => {
  const [detailsSkills, setDetailsSkills] = useState(false);
  const [jobSkillIdToRender, SetJobSkillId] = useState();

  const toggle = (id) => {
    setDetailsSkills(!detailsSkills);
    SetJobSkillId(id);
  };

  return (
    <>
      <table className="kt-datatable__table">
        <thead className="kt-datatable__head">
          <tr className="kt-datatable__row">
            <th className="kt-datatable__cell kt-datatable__toggle-detail">
              <span />
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 110 }}>Job Position</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 110 }}>Contract</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 110 }}>Sponsored</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 110 }}>Job skills</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 110 }}>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="kt-datatable__body">
          {jobs &&
            jobs.map((job) => {
              return (
                <React.Fragment key={job.id}>
                  <tr
                    className="kt-datatable__row"
                    style={{ left: 0 }}
                    key={job.id}
                  >
                    <td className="kt-datatable__cell kt-datatable__toggle-detail">
                      <a
                        className="kt-datatable__toggle-detail"
                        onClick={() => toggle(job.id)}
                      >
                        <i
                          className="fa fa-caret-right"
                          style={{ cursor: "pointer" }}
                        />
                      </a>
                    </td>
                    <td className="kt-datatable__cell">
                      <span style={{ width: 110 }}>{job.jobPosition}</span>
                    </td>
                    <td className="kt-datatable__cell">
                      <span style={{ width: 110 }}>{job.JobContractType}</span>
                    </td>
                    <td className="kt-datatable__cell">
                      <span style={{ width: 110 }}>
                        {job.sponsored.toString()}
                      </span>
                    </td>
                    <td className="kt-datatable__cell">
                      <span style={{ width: 110, display: "flex" }}>
                        <span
                          className="kt-badge kt-badge--primary"
                          style={{ marginTop: "2px" }}
                        >
                          {job.jobSkills.length}
                        </span>
                        &nbsp; &nbsp;
                        <Btn
                          title="Add job skill"
                          btn={<AddButton />}
                          body={
                            <AddSkillModalForm
                              action={props.addCompanyJobOfferSkill}
                              jobId={job.id}
                            />
                          }
                        />
                      </span>
                    </td>
                    <td className="kt-datatable__cell">
                      <span style={{ width: 110, display: "flex" }}>
                        <Btn
                          title="Delete job"
                          btn={<DeleteButton />}
                          body={
                            <ConfirmationModalForm
                              action={() => props.deleteCompanyJobOffer(job.id)}
                            />
                          }
                        />
                        &nbsp; &nbsp;
                        <Btn
                          title="Update Job Offer"
                          btn={<UpdateButton />}
                          body={
                            <UpdateJobOfferForm
                              action={props.UpdateCompanyJobOffer}
                              job={job}
                            />
                          }
                        />
                      </span>
                    </td>
                  </tr>
                  <JobSkillsTabRow
                    job={job}
                    jobSkillIdToRender={jobSkillIdToRender}
                    detailsSkills={detailsSkills}
                    deleteSkillAction={props.deleteJobOfferSkill}
                  />
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default connect(null, { ...actions })(JobOfferListTable);
