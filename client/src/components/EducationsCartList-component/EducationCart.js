import React, { useRef } from "react";
import ButtonModalProfilAddUpdate from "../common/ButtonsModalProfileAddUpdate-component";

const EducationCart = ({ education, selectedMenuSection, deleteAction }) => {
  const formRef = useRef();
  return (
    <div className="kt-portlet kt-portlet--height-fluid">
      {/* header */}
      <div className="kt-portlet__head kt-portlet__head--noborder">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title"></h3>
        </div>
        <div className="kt-portlet__head-toolbar">
          {/*  <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
            <i className="flaticon2-delete" />
          </button>
          &nbsp;
          <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
            <i className="flaticon2-refresh" />
          </button> */}
          <ButtonModalProfilAddUpdate
            formRef={formRef}
            selectedMenuSection={selectedMenuSection}
            id={education.id}
            formValue={education}
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
              <div style={{ display: "grid" }}>
                <a className="kt-widget__username">
                  <i
                    className="flaticon2-writing"
                    style={{ marginRight: "10px" }}
                  />
                  {education.diplomaMajor}
                </a>
                <a className="kt-widget__username">
                  <i
                    className="la la-institution"
                    style={{ marginRight: "10px" }}
                  />
                  {education.establishment}
                </a>
              </div>
            </div>
          </div>

          <div className="kt-widget__body">
            <div className="kt-widget__section" style={{ marginLeft: "13px" }}>
              I distinguish three objectsves First merely firsr{" "}
              <b>USD421/Annual</b> esetablished and nice coocked
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(100px, 1fr) )",
                marginBottom: "13px",
              }}
            >
              <div>
                <div
                  className="kt-widget__item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px",
                    marginLeft: "10px",
                    justifyContent: "center",
                  }}
                >
                  <i className="flaticon-map-location" />
                  <span
                    className="kt-widget__date"
                    style={{ marginLeft: "5px" }}
                  >
                    Start
                  </span>
                  <div className="kt-widget__label">
                    <span className="btn btn-sm btn-bold btn-upper">
                      {new Date(education.startDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div
                  className="kt-widget__item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px",
                    marginLeft: "10px",
                    justifyContent: "center",
                  }}
                >
                  <i className="flaticon-map-location" />
                  <span
                    className="kt-widget__date"
                    style={{ marginLeft: "5px" }}
                  >
                    End
                  </span>
                  <div className="kt-widget__label">
                    <span className="btn btn-sm btn-bold btn-upper">
                      {new Date(education.startDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="kt-widget__item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px",
                    justifyContent: "center",
                  }}
                >
                  <i className="flaticon-map-location" />
                  <span
                    className="kt-widget__date"
                    style={{ marginLeft: "5px" }}
                  >
                    Major
                  </span>
                  <div className="kt-widget__label">
                    <span className="btn btn-sm btn-bold btn-upper">
                      {education.diplomaMajor}
                    </span>
                  </div>
                </div>
                <div
                  className="kt-widget__item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px",
                    justifyContent: "center",
                  }}
                >
                  <i className="flaticon-map-location" />
                  <span
                    className="kt-widget__date"
                    style={{ marginLeft: "5px" }}
                  >
                    Type
                  </span>
                  <div className="kt-widget__label">
                    <span className="btn btn-sm btn-bold btn-upper">
                      {education.diplomaType}
                    </span>
                  </div>
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

export default EducationCart;
