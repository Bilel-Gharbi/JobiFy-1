import React from "react";
import EducationCart from "./EducationCart";

const EducationCartList = ({ data, deleteEducation, selectedMenuSection }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          {data.map((element) => (
            <EducationCart
              key={element.id}
              education={element}
              deleteAction={deleteEducation}
              selectedMenuSection={selectedMenuSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCartList;
