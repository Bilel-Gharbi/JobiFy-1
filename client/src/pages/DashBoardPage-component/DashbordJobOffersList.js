import React from "react";
import Select from "react-select";

import JobOfferListTable from "./JobOfferListTable";

const DashbordJobOffersList = (props) => {
  const options = [
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
    { value: "Remote", label: "Remote" },
  ];

  const handleSelectChange = (selectOption) => {
    console.log("hello");
    console.log(selectOption);
  };

  return (
    <div>
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
                            placeholder="Search..."
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
                              placeholder="search by status "
                              //value={selectValue.value}
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
    </div>
  );
};

export default DashbordJobOffersList;
