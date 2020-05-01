import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { fetechJobs } from "../../actions/jobsAction";

import Button from "../../components/common/Button-component/Button";

const FilterBar = (props) => {
  const { limitPagination, fetechJobs } = props;

  return (
    <div>
      <div
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          className="btn btn-outline-brand btn-square btn-sm"
          icon="fa fa-code"
          id={1}
          onClick={() => fetechJobs(1, limitPagination)}
        >
          ALL
        </Button>
        &nbsp; &nbsp;
        <Button
          className="btn btn-outline-brand btn-square btn-sm"
          icon="fa fa-code"
          id={2}
          onClick={() => fetechJobs(1, limitPagination, "CDI", "Contract")}
        >
          CDI
        </Button>
        &nbsp;
        <Button
          className="btn btn-outline-brand btn-square btn-sm"
          icon="fa fa-code"
          id={3}
          onClick={() => fetechJobs(1, limitPagination, "CDD", "Contract")}
        >
          CDD
        </Button>
        &nbsp;
        <Button
          className="btn btn-outline-brand btn-square btn-sm"
          icon="fa fa-code"
          id={4}
          onClick={() => fetechJobs(1, limitPagination, "Remote", "Contract")}
        >
          Remote
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    limitPagination: state.UI.limit,
  };
};

export default connect(mapStateToProps, { fetechJobs })(FilterBar);
