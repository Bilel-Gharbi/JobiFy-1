import React from "react";

import Tag from "../common/Tag-component";

const LanguagesCartList = ({ data }) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          <div className="kt-portlet kt-portlet--height-fluid">
            {/* header */}
            <div className="kt-portlet__head kt-portlet__head--noborder">
              <div className="kt-portlet__head-label">
                <h3 className="kt-portlet__head-title"></h3>
              </div>
              <div className="kt-portlet__head-toolbar">
                <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
                  <i className="flaticon2-add" />
                </button>
              </div>
            </div>
            {/* header */}
            <div className="kt-portlet__body" style={{ padding: "0px 5%" }}>
              {/*begin::Widget */}
              <div className="kt-widget kt-widget--user-profile-2">
                <div className="kt-widget__head">
                  <div className="kt-widget__info">
                    <a className="kt-widget__username">Languages</a>
                  </div>
                </div>

                <div className="kt-widget__body" style={{ margin: "5% 0px" }}>
                  <div
                    style={{
                      display: "grid",
                      alignItems: "center",
                      justifyContent: "center",
                      gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                      gridGap: "10px",
                    }}
                  >
                    {data.map((element) => (
                      <Tag key={element.id}>{element.name}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*end::Widget */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LanguagesCartList;
