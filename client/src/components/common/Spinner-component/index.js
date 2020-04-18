import React from "react";

import { Spinner } from "reactstrap";

const SpinnerLoader = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "30%",
      }}
    >
      <Spinner style={{ width: "10rem", height: "10rem" }} type="grow" />
    </div>
  );
};

export default SpinnerLoader;
