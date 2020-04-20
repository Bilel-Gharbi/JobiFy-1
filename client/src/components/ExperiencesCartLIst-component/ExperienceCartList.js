import React from "react";
import ExperienceCart from "./ExperienceCart";

const ExperienceCartList = ({
  data,
  deleteExperience,
  selectedMenuSection,
}) => {
  console.log(data);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          {data.map((element) => (
            <ExperienceCart
              key={element.id}
              experience={element}
              selectedMenuSection={selectedMenuSection}
              deleteAction={deleteExperience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCartList;
