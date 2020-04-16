import React from "react";
import Tag from "../../components/common/Tag-component/index";

const CertificationCart = ({ certification }) => {
  return (
    <div className="kt-portlet kt-portlet--height-fluid">
      {/* header */}
      <div className="kt-portlet__head kt-portlet__head--noborder">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title"></h3>
        </div>
        <div className="kt-portlet__head-toolbar">
          <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
            <i className="flaticon2-delete" />
          </button>
          &nbsp;
          <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
            <i className="flaticon2-refresh" />
          </button>
        </div>
      </div>
      {/* header */}
      <div className="kt-portlet__body" style={{ padding: "0px 3%" }}>
        {/*begin::Widget */}
        <div className="kt-widget kt-widget--user-profile-2">
          <div className="kt-widget__head">
            <div className="kt-widget__info">
              <div style={{ display: "grid" }}>
                <a className="kt-widget__username">
                  <i
                    className="la la-clipboard"
                    style={{ marginRight: "10px" }}
                  />
                  {certification.name}
                </a>
                <a className="kt-widget__username">
                  <i
                    className="flaticon-home"
                    style={{ marginRight: "10px" }}
                  />
                  {certification.organization}
                </a>
              </div>
            </div>
          </div>

          <div className="kt-widget__body">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(100px, 1fr) )",
                padding: "5% 0%",
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
                        {new Date(certification.date).toDateString()}
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

export default CertificationCart;
