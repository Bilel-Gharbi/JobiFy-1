import React, { Component, useRef, useEffect } from "react";
import { fetechJobs } from "../../actions/jobsAction";
import { connect } from "react-redux";

import ReCaptcha from "../../components/common/ReCaptcha";
import Form from "../../components/common/Form-component/Form";
import Modal from "../../components/common/modal-component/Modal";
import ButtonModalProfil from "../../components/common/ButtonModalProfil-component";
import JobCartList from "../JobsPage-component/JobCartList";
import JobCartSkillsList from "../JobsPage-component/JobCartSkillsList";
const InfoPage = ({ ...props }) => {
  useEffect(() => {
    props.fetechJobs();
  }, []);

  return (
    <div className="row" data-sticky-container>
      <div className="col-lg-1 col-xl-2">
        <div
          className="kt-portlet sticky"
          data-sticky="true"
          data-margin-top="100px"
          data-sticky-for={1023}
          data-sticky-class="kt-sticky"
          style={{}}
        >
          <div className="kt-portlet__body kt-portlet__body--fit">
            <ul
              className="kt-nav kt-nav--bold kt-nav--md-space kt-nav--v3 kt-margin-t-20 kt-margin-b-20 nav nav-tabs"
              role="tablist"
            >
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link active"
                  data-toggle="tab"
                  href="#kt_profile_tab_personal_information"
                  role="tab"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-avatar" />
                  </span>
                  <span className="kt-nav__link-text">
                    Personal Information
                  </span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  data-toggle="tab"
                  href="#kt_profile_tab_account_information"
                  role="tab"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-lock" />
                  </span>
                  <span className="kt-nav__link-text">
                    Acccount Information
                  </span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  data-toggle="tab"
                  href="#kt_profile_change_password"
                  role="tab"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-settings" />
                  </span>
                  <span className="kt-nav__link-text">Change Password</span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  data-toggle="tab"
                  href="#kt_profile_email_settings"
                  role="tab"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-multimedia-2" />
                  </span>
                  <span className="kt-nav__link-text">Email Settings</span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  href="#"
                  role="tab"
                  data-toggle="kt-tooltip"
                  title
                  data-placement="right"
                  data-original-title="This feature is coming soon!"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-coins" />
                  </span>
                  <span className="kt-nav__link-text">Saved Credit Cards</span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  href="#"
                  role="tab"
                  data-toggle="kt-tooltip"
                  title
                  data-placement="right"
                  data-original-title="This feature is coming soon!"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-customer" />
                  </span>
                  <span className="kt-nav__link-text">Social Networks</span>
                </a>
              </li>
              <li className="kt-nav__separator" />
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  href="#"
                  role="tab"
                  data-toggle="kt-tooltip"
                  title
                  data-placement="right"
                  data-original-title="This feature is coming soon!"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-diagram" />
                  </span>
                  <span className="kt-nav__link-text">Tax Information</span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  href="#"
                  role="tab"
                  data-toggle="kt-tooltip"
                  title
                  data-placement="right"
                  data-original-title="This feature is coming soon!"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-bag" />
                  </span>
                  <span className="kt-nav__link-text">Purchases</span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  href="#"
                  role="tab"
                  data-toggle="kt-tooltip"
                  title
                  data-placement="right"
                  data-original-title="This feature is coming soon!"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-tabs" />
                  </span>
                  <span className="kt-nav__link-text">Statements</span>
                </a>
              </li>
              <li className="kt-nav__item">
                <a
                  className="kt-nav__link"
                  href="#"
                  role="tab"
                  data-toggle="kt-tooltip"
                  title
                  data-placement="right"
                  data-original-title="This feature is coming soon!"
                >
                  <span className="kt-nav__link-icon">
                    <i className="flaticon-share" />
                  </span>
                  <span className="kt-nav__link-text">Audit Log</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-10">
        <div className="alert alert-light alert-elevate fade show" role="alert">
          <div className="alert-icon">
            <i className="flaticon-questions-circular-button kt-font-brand" />
          </div>
          <div className="alert-text">
            Keen's sticky panel features is powered by Sticky-js library written
            in vanilla javascript. With this library you can easily set sticky
            elements on your website. It's also responsive. Just use
            <code>data-sticky="true"</code> attribute to enable sticky mode for
            any element and use <code>data-margin-top="120"</code> to set margin
            to to enable the sticky mode for your element. For more info please
            visit the plugin's the plugin's
            <a
              href="https://github.com/rgalus/sticky-js"
              className="kt-link"
              target="_blank"
            >
              documentation
            </a>
            .
          </div>
        </div>
        <div className="kt-portlet">
          <div className="kt-portlet__body">
            <JobCartList data={props} />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.jobs,
    isLoged: state.auth.isLoged,
    userProfile: state.userProfile,
    jobDetails: state.jobs.jobDetails,
  };
};

export default connect(mapStateToProps, { fetechJobs })(InfoPage);
