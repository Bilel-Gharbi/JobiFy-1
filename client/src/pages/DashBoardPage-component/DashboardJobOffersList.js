import React from "react";
import { connect } from "react-redux";
import {
  searchJobByPosition,
  filterJobByContract,
} from "../../actions/comapny";
import Select from "react-select";

import JobOfferListTable from "./JobOfferListTable";

const DashboardJobOffersList = (props) => {
  const options = [
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
    { value: "Remote", label: "Remote" },
    { value: "All", label: "All" },
  ];

  const handleSelectChange = (selectOption) => {
    props.filterJobByContract(selectOption.value);
  };

  const handleSearchChange = (e) => {
    props.searchJobByPosition(e.target.value);
  };

  return (
    <>
      <div className="kt-portlet">
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
                            placeholder="Search job position ..."
                            onChange={handleSearchChange}
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
                              placeholder="Filter by contract "
                              options={options}
                              onChange={handleSelectChange}
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
            <JobOfferListTable jobs={props.jobs} />
          </>
        </div>
      </div>
    </>
  );
};

export default connect(null, { searchJobByPosition, filterJobByContract })(
  DashboardJobOffersList
);
