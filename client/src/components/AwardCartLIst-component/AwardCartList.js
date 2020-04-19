import React from "react";
import AwardCart from "./AwardCart";
import { deleteAward } from "../../actions/resumeAction";

const AwardCartList = ({ data, selectedMenuSection, deleteAward }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          {data.map((element) => (
            <AwardCart
              key={element.id}
              award={element}
              selectedMenuSection={selectedMenuSection}
              deleteAction={deleteAward}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardCartList;
