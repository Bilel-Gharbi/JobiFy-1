import React from "react";
import Tag from "../../components/common/Tag-component";
import { technlogiesTabGenerator } from "../../helper";

const CandidateProjectsAndAwards = ({ projects, awards }) => {
  return (
    <div className="kt-widget4" style={{ margin: "10px 0px" }}>
      <div className="kt-widget4__item" style={{ display: "flex" }}>
        {projects && projects.length ? <h3>Projects</h3> : null}
      </div>
      {projects &&
        projects.length > 0 &&
        projects.map((project, i) => {
          const technologiesTab = technlogiesTabGenerator(project.technologies);
          return (
            <div
              className="kt-widget4__item"
              key={i}
              style={{ display: "flex" }}
            >
              <span className="kt-widget4__icon" style={{ flex: 1 }}>
                <i className="flaticon2-start-up kt-font-primary" />
              </span>
              <div
                className="kt-portlet__body"
                style={{ flex: 28, padding: 0 }}
              >
                {/*begin::Widget */}
                <div className="kt-widget kt-widget--user-profile-2">
                  <div className="kt-widget__head" style={{ margin: 0 }}>
                    <div className="kt-widget__info">
                      <a className="kt-widget__username">{project.name}</a>
                      <div
                        className="kt-widget__desc"
                        style={{ padding: "0px" }}
                      >
                        <a
                          href="#"
                          className="btn btn-label-github"
                          style={{ padding: "0px" }}
                        >
                          <i className="socicon-github" /> {project.link}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="kt-widget__body" style={{ marginTop: "5px" }}>
                    <div
                      style={{
                        display: "grid",
                        alignItems: "center",
                        justifyContent: "center",
                        gridTemplateColumns:
                          "repeat(auto-fit,minmax(160px,1fr))",
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
            </div>
          );
        })}

      <div className="kt-widget4__item" style={{ display: "flex" }}>
        {awards && awards.length ? <h3>Certifications</h3> : null}
      </div>
      {awards &&
        awards.length > 0 &&
        awards.map((award, i) => {
          return (
            <div
              className="kt-widget4__item"
              key={i}
              style={{ display: "flex" }}
            >
              <span className="kt-widget4__icon" style={{ flex: 1 }}>
                <i className="flaticon2-world kt-font-primary" />
              </span>

              <div
                className="kt-portlet__body"
                style={{ flex: 28, padding: 0 }}
              >
                {/*begin::Widget */}
                <div
                  className="kt-widget kt-widget--user-profile-2"
                  style={{ paddingTop: "0px" }}
                >
                  <div className="kt-widget__head" style={{ margin: 0 }}>
                    <div className="kt-widget__info" style={{ width: "100%" }}>
                      <a className="kt-widget__username">{award.name}</a>
                    </div>
                  </div>

                  <div className="kt-widget__body">
                    <div
                      className="kt-widget__section"
                      style={{ marginLeft: "13px" }}
                    >
                      {award.description}
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat( auto-fit, minmax(100px, 1fr) )",
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
            </div>
          );
        })}
    </div>
  );
};

export default CandidateProjectsAndAwards;
