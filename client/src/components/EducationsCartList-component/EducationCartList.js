import React from "react";
import EducationCart from "./EducationCart";

const EducationCartList = ({ data }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          {data.map((element) => (
            <EducationCart key={element.id} education={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCartList;
