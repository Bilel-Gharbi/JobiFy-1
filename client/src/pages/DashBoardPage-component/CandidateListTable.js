import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/comapny";

import Btn from "../../components/common/ModalDashboard-component/ModalDashboard";
import JobSkillsTabRow from "../../components/JobSkillsTabRow-component";

import {
  AddSkillModalForm,
  UpdateJobOfferForm,
  ConfirmationModalForm,
} from "./ModalForms";
import DetailsCandidateResume from "./DetailsCandidateResume";
import {
  DeleteButton,
  AddButton,
  UpdateButton,
  DoneButton,
  XButton,
  DetailsButton,
  CheckButton,
} from "../../components/common/SVG-Buttons";

const CandidateListTable = ({ applications, ...props }) => {
  const [detailsSkills, setDetailsSkills] = useState(false);
  const [jobSkillIdToRender, SetJobSkillId] = useState();

  const toggle = (id) => {
    //setDetailsSkills(!detailsSkills);
    //SetJobSkillId(id);
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
              <span style={{ width: 150 }}>Job Position</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 150 }}>Candidate</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 110 }}>Status</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 100, textAlign: "center" }}>Resume</span>
            </th>
            <th className="kt-datatable__cell kt-datatable__cell--sort">
              <span style={{ width: 110, textAlign: "center" }}>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="kt-datatable__body">
          {applications &&
            applications.map((app, i) => {
              return (
                <React.Fragment key={app.id}>
                  <tr
                    className="kt-datatable__row"
                    style={{ left: 0 }}
                    //key={job.id}
                  >
                    <td className="kt-datatable__cell kt-datatable__toggle-detail">
                      <a
                        className="kt-datatable__toggle-detail"
                        //onClick={() => toggle(job.id)}
                      >
                        <i
                          className="fa fa-caret-right"
                          style={{ cursor: "pointer" }}
                        />
                      </a>
                    </td>
                    <td className="kt-datatable__cell">
                      <span style={{ width: 150 }}>
                        {app.JobOffer.jobPosition}
                      </span>
                    </td>
                    <td className="kt-datatable__cell">
                      <span style={{ width: 150 }}>
                        {app.Resume.User.firstName +
                          " " +
                          app.Resume.User.lastName}
                      </span>
                    </td>

                    <td className="kt-datatable__cell">
                      <span style={{ width: 110, display: "flex" }}>
                        {app.status}
                      </span>
                    </td>

                    <td className="kt-datatable__cell">
                      <span
                        style={{
                          width: 110,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Btn
                          title="Candidate Resume"
                          btn={<DetailsButton />}
                          size="lg"
                          body={<DetailsCandidateResume data={app} />}
                        />
                      </span>
                    </td>
                    <td className="kt-datatable__cell">
                      <span
                        style={{
                          width: 110,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Btn
                          title="Update Job Offer"
                          btn={<XButton />}
                          body={
                            <UpdateJobOfferForm
                            //action={props.UpdateCompanyJobOffer}
                            //job={job}
                            />
                          }
                        />
                        &nbsp; &nbsp;
                        <Btn
                          title="Update Job Offer"
                          btn={<CheckButton />}
                          body={
                            <UpdateJobOfferForm
                            //action={props.UpdateCompanyJobOffer}
                            //job={job}
                            />
                          }
                        />
                      </span>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default connect(null, { ...actions })(CandidateListTable);
