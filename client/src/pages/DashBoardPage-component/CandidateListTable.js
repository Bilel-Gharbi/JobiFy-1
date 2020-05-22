import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/comapny";

import Btn from "../../components/common/ModalDashboard-component/ModalDashboard";

import {
  AcceptCandidateModalForm,
  ConfirmationRejectCandidateModalForm,
} from "./ModalForms";
import DetailsCandidateResume from "./DetailsCandidateResume";
import {
  XButton,
  DetailsButton,
  CheckButton,
} from "../../components/common/SVG-Buttons";

const CandidateListTable = ({ applications, ...props }) => {
  return (
    <>
      <table className="kt-datatable__table" style={{ padding: "0 35px" }}>
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
                  <tr className="kt-datatable__row" style={{ left: 0 }}>
                    <td className="kt-datatable__cell kt-datatable__toggle-detail">
                      <a className="kt-datatable__toggle-detail">
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
                          title="Confirm candidate"
                          btn={<XButton />}
                          body={
                            <ConfirmationRejectCandidateModalForm
                              action={props.acceptOrRejectCandidate}
                              application={app}
                            />
                          }
                        />
                        &nbsp; &nbsp;
                        <Btn
                          title="Accept Candidate"
                          btn={<CheckButton />}
                          body={
                            <AcceptCandidateModalForm
                              action={props.acceptOrRejectCandidate}
                              application={app}
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
