import React, { useRef } from "react";
import ButtonModalProfilAddUpdate from "../common/ButtonsModalProfileAddUpdate-component";

const ExperienceCart = ({ experience, deleteAction, selectedMenuSection }) => {
  const formRef = useRef();
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
            id={experience.id}
            formValue={experience}
            deleteAction={deleteAction}
          />
        </div>
      </div>
      {/* header */}
      <div className="kt-portlet__body" style={{ padding: "0px 5%" }}>
        {/*begin::Widget */}
        <div className="kt-widget kt-widget--user-profile-2">
          <div className="kt-widget__head">
            <div className="kt-widget__info">
              <a className="kt-widget__username">{experience.companyName}</a>
              <span className="kt-widget__desc">{experience.position}</span>
            </div>
          </div>

          <div className="kt-widget__body">
            <div className="kt-widget__section" style={{ marginLeft: "13px" }}>
              {experience.task}I distinguish three objectsves First merely firsr{" "}
              <b>USD421/Annual</b> esetablished and nice coocked
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="kt-widget__item"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* <span className="kt-widget__date">Start Date</span> */}
                <i className="flaticon-map-location" />
                <span className="kt-widget__date" style={{ marginLeft: "5px" }}>
                  Start Date
                </span>
                <div className="kt-widget__label">
                  <span className="btn btn-sm btn-bold btn-upper">
                    {new Date(experience.startDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div
                className="kt-widget__item"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* <span className="kt-widget__date">End Date</span> */}
                <i className="flaticon-map-location" />
                <span className="kt-widget__date" style={{ marginLeft: "5px" }}>
                  End Date
                </span>
                <div className="kt-widget__label">
                  <span className="btn btn-sm btn-bold btn-upper">
                    {new Date(experience.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div
                className="kt-widget__item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <i className="flaticon-map-location" />
                <div className="kt-widget__label" style={{ marginLeft: "5px" }}>
                  <b> Tunisia</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end::Widget */}
    </div>
  );
};

export default ExperienceCart;
