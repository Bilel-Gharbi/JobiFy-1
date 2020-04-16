import React from "react";
import AwardCart from "./AwardCart";

const AwardCartList = ({ data }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          {data.map((element) => (
            <AwardCart key={element.id} award={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardCartList;
