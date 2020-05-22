import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/comapny";

import Select from "react-select";
import CandidateListTable from "./CandidateListTable";

const DashboardCandidateList = (props) => {
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

  return (
    <>
      <div className="kt-portlet" style={{ height: "100%" }}>
        <div className="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded">
          <>
            <div className="kt-portlet__body">
              {/*begin: Search Form */}
              <div className="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
                <div className="row align-items-center">
                  <div style={{ width: "100%" }}>
                    <div className="row align-items-center">
                      <div className="col-md-7 ">
                        <h3 style={{ marginLeft: "10px" }}>
                          Candidates Applications
                        </h3>
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
            <CandidateListTable applications={props.applications} />
          </>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    applications: state.companyProfile.applications,
    company: state.companyProfile.company,
  };
};

export default connect(mapStateToProps, { ...actions })(DashboardCandidateList);
