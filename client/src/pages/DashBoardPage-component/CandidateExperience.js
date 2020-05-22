import React from "react";

const CandidateExperience = ({ data }) => {
  return (
    <>
      <div className="kt-widget4" style={{ margin: "10px 0px" }}>
        {data.map((experience, i) => {
          return (
            <div
              className="kt-widget4__item"
              key={i}
              style={{ display: "flex" }}
            >
              <span className="kt-widget4__icon" style={{ flex: 1 }}>
                <i className="flaticon2-soft-icons-1 kt-font-primary" />
              </span>
              <div
                className="kt-portlet__body"
                style={{ flex: 28, display: "flex", padding: 0 }}
              >
                {/*begin::Widget */}
                <div className="kt-widget kt-widget--user-profile-2">
                  <div className="kt-widget__head" style={{ margin: 0 }}>
                    <div className="kt-widget__info" style={{ padding: 0 }}>
                      <h4>
                        {experience.position} @
                        <span>{experience.companyName} </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="kt-widget__body" style={{ display: "grid" }}>
                  <div style={{ display: "flex" }}>
                    <div
                      className="kt-widget__item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i className="flaticon2-time" />
                      <span
                        className="kt-widget__date"
                        style={{ marginLeft: "5px" }}
                      >
                        Start Date
                      </span>
                      <div className="kt-widget__label">
                        <span style={{ margin: "0px 10px" }}>
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
                      <i className="flaticon2-time" />
                      <span
                        className="kt-widget__date"
                        style={{ marginLeft: "5px" }}
                      >
                        End Date
                      </span>
                      <div className="kt-widget__label">
                        <span style={{ margin: "0px 10px" }}>
                          {new Date(experience.endDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CandidateExperience;
