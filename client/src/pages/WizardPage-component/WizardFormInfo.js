import React from "react";

const WizardFormInfo = () => {
  return (
    <div className="kt-sc__bottom">
      <ul className="nav nav-tabs  nav-tabs-line" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#kt_tabs_6_1"
            role="tab"
            aria-selected="false"
          >
            Personal Infomation
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#kt_tabs_6_2"
            role="tab"
            aria-selected="false"
          >
            Your Resume Info
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="tab"
            href="#kt_tabs_6_3"
            role="tab"
            aria-selected="true"
          >
            Experiences
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#kt_tabs_6_4"
            role="tab"
          >
            Education
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#kt_tabs_6_6"
            role="tab"
          >
            SKills
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WizardFormInfo;
