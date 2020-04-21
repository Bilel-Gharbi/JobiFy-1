import React from "react";
import Modal from "../../components/common/modal-component/Modal";

const JobCartHeader = ({ data }) => {
  const {
    companyName,
    jobPosition,
    JobContractType,
    jobMinSalary,
    jobMaxSalary,
    location,
    type,
  } = data;

  const apply = () => {
    console.log("hello");
    return <Modal open={true} />;
  };

  return (
    <>
      <div className="kt-widget__head">
        <div style={{ display: "grid" }}>
          <a className="kt-widget__username">{jobPosition}</a>
          <a className="kt-widget__username">
            {companyName}
            <i className="flaticon2-correct" />
          </a>
        </div>

        <div className="kt-widget__action">
          <button
            type="button"
            className="btn btn-sm btn-upper"
            style={{ background: "#edeff6" }}
          >
            Details
          </button>
          &nbsp;
          {/* <button>
            <Modal
              customButton={
                <button
                  type="button"
                  onClick={apply}
                  className="btn btn-success btn-sm btn-upper"
                >
                  applu
                </button>
              }
              modalName={"apply"}
            />
          </button> */}
          <button
            type="button"
            onClick={apply}
            className="btn btn-success btn-sm btn-upper"
          >
            Apply
          </button>
          &nbsp;
          <button type="button" className="btn btn-brand btn-sm btn-upper">
            Save
          </button>
        </div>
      </div>
      {/* tags header */}
      <div className="kt-widget__subhead">
        <a>
          <i className="flaticon2-placeholder" />
          <b>{location}</b>
        </a>
        <a>
          <i className="flaticon2-new-email" />
          <b>{type}</b>
        </a>
        <a>
          <i className="flaticon2-calendar-3" />
          <b>{JobContractType}</b>
        </a>
        <a>
          <i className="flaticon2-placeholder" />
          <b>Averge Salary </b>
          {(parseInt(jobMaxSalary) + parseInt(jobMinSalary)) / 2} $
        </a>
      </div>
    </>
  );
};

export default JobCartHeader;
