import React from "react";
import CertificationCart from "./CertificationCart";

const CertificationCartList = ({
  data,
  deleteCertificate,
  selectedMenuSection,
}) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          {data.map((element) => (
            <CertificationCart
              key={element.id}
              certification={element}
              selectedMenuSection={selectedMenuSection}
              deleteAction={deleteCertificate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationCartList;
