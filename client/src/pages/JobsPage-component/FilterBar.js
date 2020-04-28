import React from "react";
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
          onClick={() => fetechJobs(1, limitPagination, "CDI", "Contract")}
        >
          CDI
        </Button>
        &nbsp;
        <Button
          className="btn btn-outline-brand btn-square btn-sm"
          icon="fa fa-code"
          onClick={() => fetechJobs(1, limitPagination, "CDD", "Contract")}
        >
          CDD
        </Button>
        &nbsp;
        <Button
          className="btn btn-outline-brand btn-square btn-sm"
          icon="fa fa-code"
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
