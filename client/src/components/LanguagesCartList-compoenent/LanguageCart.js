import React from "react";

const LanguageCart = ({ language }) => {
  return (
    <div className="kt-portlet kt-portlet--height-fluid">
      <div className="col-xl-12" style={{ padding: "10px" }}>
        {/*begin::Widget */}
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            className="col-xl-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h5>
              <strong>{language.name}</strong>
            </h5>
          </div>
          <div className="col-xl-5">
            <a className="btn btn-label-brand btn-sm btn-bold btn-upper">
              {language.level}
            </a>
          </div>
          <div
            className="col-xl-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
              <i className="flaticon2-delete" />
            </button>
            &nbsp;
            <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
              <i className="flaticon2-refresh" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCart;
