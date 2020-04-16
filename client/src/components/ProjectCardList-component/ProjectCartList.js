import React from "react";
import ProjectCart from "./ProjectCart";

const ProjectCartList = ({ data }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          {data.map((element) => (
            <ProjectCart key={element.id} project={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCartList;
