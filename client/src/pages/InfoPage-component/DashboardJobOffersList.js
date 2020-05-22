import React from "react";
import Select from "react-select";

const DashboardJobOffersList = () => {
  const options = [
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
    { value: "Remote", label: "Remote" },
  ];
  return (
    <div>
      <div className="kt-portlet" /* style={{ padding: "5%" }} */>
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
            <table className="kt-datatable__table">
              <thead className="kt-datatable__head">
                <tr className="kt-datatable__row">
                  <th className="kt-datatable__cell kt-datatable__toggle-detail">
                    <span />
                  </th>
                  <th className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: 110 }}>Job offer</span>
                  </th>
                  <th className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: 110 }}>First Name</span>
                  </th>
                  <th className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: 110 }}>Last Name</span>
                  </th>
                  <th className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: 110 }}>Expertise </span>
                  </th>

                  <th
                    className="kt-datatable__cell kt-datatable__cell--sort"
                    style={{ display: "none" }}
                  >
                    <span style={{ width: 110 }}>Deposit Paid</span>
                  </th>
                  <th
                    data-field="Order Date"
                    className="kt-datatable__cell kt-datatable__cell--sort"
                    style={{ display: "none" }}
                  >
                    <span style={{ width: 110 }}>Order Date</span>
                  </th>
                  <th className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: 110 }}>Status</span>
                  </th>
                </tr>
              </thead>
              <tbody style={{}} className="kt-datatable__body">
                <tr className="kt-datatable__row" style={{ left: 0 }}>
                  <td className="kt-datatable__cell kt-datatable__toggle-detail">
                    <a className="kt-datatable__toggle-detail" href>
                      <i className="fa fa-caret-right" />
                    </a>
                  </td>
                  <td data-field="Order ID" className="kt-datatable__cell">
                    <span style={{ width: 110 }}>111</span>
                  </td>
                  <td data-field="Order ID" className="kt-datatable__cell">
                    <span style={{ width: 110 }}>0006-3629</span>
                  </td>
                  <td data-field="Car Make" className="kt-datatable__cell">
                    <span style={{ width: 110 }}>Land Rover</span>
                  </td>
                  <td data-field="Car Model" className="kt-datatable__cell">
                    <span style={{ width: 110 }}>Range Rover</span>
                  </td>
                  <td className="kt-datatable__cell">
                    <span style={{ width: 110 }}>
                      <span className="kt-badge  kt-badge--primary kt-badge--inline kt-badge--pill">
                        Canceled
                      </span>
                    </span>
                  </td>
                </tr>
                {/* display job details */}
                <table>
                  <tbody>
                    <tr className="kt-datatable__row">
                      <td className="kt-datatable__cell">
                        <span>Deposit Paid</span>
                      </td>
                      <td className="kt-datatable__cell">
                        <span style={{ width: 110 }}>$22672.60</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* end display job details */}
              </tbody>
            </table>
          </>
        </div>
      </div>
    </div>
  );
};

export default DashboardJobOffersList;
