import React, { useRef } from "react";
import ButtonModalProfilAddUpdate from "../common/ButtonsModalProfileAddUpdate-component";

const AwardCart = ({ award, selectedMenuSection, deleteAction }) => {
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
            id={award.id}
            formValue={award}
            deleteAction={deleteAction}
          />
        </div>
      </div>
      {/* header */}
      <div className="kt-portlet__body" style={{ padding: "0px 5%" }}>
        {/*begin::Widget */}
        <div
          className="kt-widget kt-widget--user-profile-2"
          style={{ paddingTop: "0px" }}
        >
          <div className="kt-widget__head">
            <div className="kt-widget__info" style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a className="kt-widget__username">
                  <i
                    className="la la-clipboard"
                    style={{ marginRight: "10px" }}
                  />
                  {award.name}
                </a>
              </div>
            </div>
          </div>

          <div
            className="kt-widget__body"
            style={{
              paddingBottom: "5%",
            }}
          >
            <div className="kt-widget__section" style={{ marginLeft: "13px" }}>
              {award.description}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(100px, 1fr) )",
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
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <a className="kt-widget__username">
                      <i
                        className="la la-clock-o"
                        style={{ marginRight: "10px" }}
                      />
                      <strong>
                        {new Date(award.date).toLocaleDateString()}
                      </strong>
                    </a>
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

export default AwardCart;
