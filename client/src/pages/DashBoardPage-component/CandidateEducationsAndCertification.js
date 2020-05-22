import React from "react";

const CandidateEducationsAndCertification = ({
  educations,
  certifications,
}) => {
  return (
    <>
      <div className="kt-widget4" style={{ margin: "10px 0px" }}>
        <div className="kt-widget4__item" style={{ display: "flex" }}>
          <h3>Education</h3>
        </div>
        {educations.map((education, i) => {
          return (
            <div
              className="kt-widget4__item"
              key={i}
              style={{ display: "flex" }}
            >
              <span className="kt-widget4__icon" style={{ flex: 1 }}>
                <i className="flaticon2-layers-2 kt-font-primary" />
              </span>
              <div
                className="kt-portlet__body"
                style={{ flex: 28, display: "flex", padding: 0 }}
              >
                <div
                  className="kt-portlet__body"
                  style={{ flex: 28, display: "flex", padding: 0 }}
                >
                  {/*begin::Widget */}

                  <div className="kt-widget kt-widget--user-profile-2">
                    <div className="kt-widget kt-widget--user-profile-2">
                      <div className="kt-widget__head" style={{ margin: 0 }}>
                        <div className="kt-widget__info" style={{ padding: 0 }}>
                          <h4>
                            {education.diplomaMajor} @
                            <span>{education.establishment} </span>
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="kt-widget__body">
                      <div style={{ display: "flex" }}>
                        <div
                          className="kt-widget__item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0px",
                            justifyContent: "center",
                          }}
                        >
                          <i className="flaticon-clock-2" />
                          <span
                            className="kt-widget__date"
                            style={{ marginLeft: "5px" }}
                          >
                            Start
                          </span>
                          <div className="kt-widget__label">
                            <span style={{ margin: "0px 10px" }}>
                              {new Date(
                                education.startDate
                              ).toLocaleDateString()}
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
                          <i className="flaticon-clock-2" />
                          <span
                            className="kt-widget__date"
                            style={{ marginLeft: "5px" }}
                          >
                            End
                          </span>
                          <div className="kt-widget__label">
                            <span style={{ margin: "0px 10px" }}>
                              {new Date(
                                education.startDate
                              ).toLocaleDateString()}
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
                          <i className="flaticon2-open-text-book" />
                          <span
                            className="kt-widget__date"
                            style={{ marginLeft: "5px" }}
                          >
                            Major
                          </span>
                          <div className="kt-widget__label">
                            <span style={{ margin: "0px 10px" }}>
                              {education.diplomaMajor}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Widget */}
              </div>
            </div>
          );
        })}

        <div className="kt-widget4__item" style={{ display: "flex" }}>
          {certifications.length ? <h3>Certifications</h3> : null}
        </div>
        {certifications.length > 0 &&
          certifications.map((certification, i) => {
            return (
              <div
                className="kt-widget4__item"
                key={i}
                style={{ display: "flex" }}
              >
                <span className="kt-widget4__icon" style={{ flex: 1 }}>
                  <i className="flaticon2-writing kt-font-primary" />
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
                          {certification.name} @
                          <span>{certification.organization} </span>
                        </h4>
                      </div>
                    </div>

                    <div className="kt-widget__body">
                      <div style={{ display: "flex" }}>
                        <div className="kt-widget__label">
                          <i
                            className="la la-clock-o"
                            style={{ marginRight: "10px" }}
                          />
                          <strong>
                            {new Date(certification.date).toLocaleDateString()}
                          </strong>
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

export default CandidateEducationsAndCertification;
