import React, { useRef } from "react";
import Tag from "../common/Tag-component";
import ButtonModalProfilAddUpdate from "../common/ButtonsModalProfileAddUpdate-component";

import { technlogiesTabGenerator } from "../../helper";

const ProjectCart = ({ project, deleteAction, selectedMenuSection }) => {
  const formRef = useRef();
  const technologiesTab = technlogiesTabGenerator(project.technologies);
  return (
    <div className="kt-portlet kt-portlet--height-fluid">
      {/* header */}
      <div className="kt-portlet__head kt-portlet__head--noborder">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title"></h3>
        </div>
        <div className="kt-portlet__head-toolbar">
          <ButtonModalProfilAddUpdate
            formRef={formRef}
            selectedMenuSection={selectedMenuSection}
            id={project.id}
            deleteAction={deleteAction}
            formValue={project}
          />
        </div>
      </div>
      {/* header */}
      <div className="kt-portlet__body" style={{ padding: "0px" }}>
        {/*begin::Widget */}
        <div className="kt-widget kt-widget--user-profile-2">
          <div className="kt-widget__head" style={{ padding: "0px 2%" }}>
            <div className="kt-widget__info">
              <a className="kt-widget__username">{project.name}</a>
              <div className="kt-widget__desc" style={{ padding: "0px" }}>
                <a
                  href="#"
                  className="btn btn-label-github"
                  style={{ padding: "0px", marginTop: "5px" }}
                >
                  <i className="socicon-github" /> {project.link}
                </a>
              </div>
            </div>
          </div>

          <div className="kt-widget__body" style={{ padding: "5%" }}>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                gridTemplateColumns: "repeat(auto-fit,minmax(160px,200px))",
                gridGap: "10px",
              }}
            >
              {technologiesTab.map((element, i) => (
                <Tag key={i} deleteButton={false}>
                  {element}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*end::Widget */}
    </div>
  );
};

export default ProjectCart;
