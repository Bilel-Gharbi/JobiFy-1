import React, { useState, useEffect } from "react";

const LeftMenu = (props) => {
  const [subMenu, toggleSubMenu] = useState(false);
  const [classSubMenu, setClassSubMenu] = useState(
    "kt-menu__item kt-menu__item--submenu"
  );

  useEffect(() => {
    subMenu
      ? setClassSubMenu(
          "kt-menu__item kt-menu__item--submenu kt-menu__item--open"
        )
      : setClassSubMenu("kt-menu__item kt-menu__item--submenu");
  }, [subMenu]);

  return (
    <>
      {/* begin:: Aside Menu */}
      <div
        className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
        style={{ flex: "1", minWidth: "250px" }}
      >
        <div className="kt-portlet">
          <div className="kt-aside-menu kt-scroll ps">
            <ul className="kt-menu__nav ">
              <li className="kt-menu__section kt-menu__section--first">
                <h4 className="kt-menu__section-text">Job Offer</h4>
                <i className="kt-menu__section-icon flaticon-more-v2" />
              </li>

              <li className={classSubMenu}>
                {/* onclick */}
                <a
                  className="kt-menu__link kt-menu__toggle"
                  onClick={() => toggleSubMenu(!subMenu)}
                >
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Job Offers</span>
                  <i className="kt-menu__ver-arrow la la-angle-right" />
                </a>
                <div className="kt-menu__submenu ">
                  <span className="kt-menu__arrow" />
                  <ul className="kt-menu__subnav">
                    {/*  start first drop menu */}
                    <li className="kt-menu__item ">
                      <a
                        href="#"
                        className="kt-menu__link "
                        onClick={() =>
                          props.setElementToRender("Create job offer")
                        }
                      >
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          Create a job{" "}
                        </span>
                      </a>
                    </li>
                    <li className="kt-menu__item ">
                      <a
                        href="#"
                        className="kt-menu__link "
                        onClick={() => props.setElementToRender("jobOfferList")}
                      >
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          My job offers
                        </span>
                      </a>
                    </li>
                    <li className="kt-menu__item ">
                      <a
                        href="#"
                        className="kt-menu__link "
                        onClick={() => props.setElementToRender("Candidate")}
                      >
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">Candidate </span>
                      </a>
                    </li>
                    <li className="kt-menu__item ">
                      <a
                        href="#"
                        className="kt-menu__link "
                        onClick={() =>
                          props.setElementToRender("Somthing Else")
                        }
                      >
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          somthing else
                        </span>
                      </a>
                    </li>
                    {/* end last drop menu  */}
                  </ul>
                </div>
              </li>
              <li className="kt-menu__item ">
                <a href="#" className="kt-menu__link ">
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Finance</span>
                </a>
              </li>
              <li
                className="kt-menu__item  kt-menu__item--submenu"
                aria-haspopup="true"
                data-ktmenu-submenu-toggle="hover"
              >
                {/* on click */}
                <a className="kt-menu__link kt-menu__toggle">
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Support</span>
                  <span className="kt-menu__link-badge">
                    <span className="kt-badge kt-badge--danger">23</span>
                  </span>
                  <i className="kt-menu__ver-arrow la la-angle-right" />
                </a>
                <div className="kt-menu__submenu ">
                  {/* <div className="kt-menu__item kt-menu__item--submenu kt-menu__item--open" >  */}
                  <span className="kt-menu__arrow" />
                  <ul className="kt-menu__subnav">
                    <li
                      className="kt-menu__item  kt-menu__item--parent"
                      aria-haspopup="true"
                    >
                      <span className="kt-menu__link">
                        <span className="kt-menu__link-text">Support</span>
                        <span className="kt-menu__link-badge">
                          <span className="kt-badge kt-badge--danger">23</span>
                        </span>
                      </span>
                    </li>
                    <li
                      className="kt-menu__item "
                      aria-haspopup="true"
                      data-ktmenu-link-redirect={1}
                    >
                      <a href="inner.html" className="kt-menu__link ">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">Reports</span>
                      </a>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu">
                      <a className="kt-menu__link kt-menu__toggle">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">Cases</span>
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      {/* sub menu */}
                      <div className="kt-menu__submenu ">
                        <span className="kt-menu__arrow" />
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a href="inner.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">
                                Pending
                              </span>
                              <span className="kt-menu__link-badge">
                                <span className="kt-badge kt-badge--warning">
                                  10
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a href="inner.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Urgent</span>
                              <span className="kt-menu__link-badge">
                                <span className="kt-badge kt-badge--danger">
                                  6
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a href="inner.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Done</span>
                              <span className="kt-menu__link-badge">
                                <span className="kt-badge kt-badge--success">
                                  2
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a href="inner.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">
                                Archive
                              </span>
                              <span className="kt-menu__link-badge">
                                <span className="kt-badge kt-badge--info kt-badge--wide">
                                  245
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* end sub menu */}
                    </li>
                    <li className="kt-menu__item " aria-haspopup="true">
                      <a href="inner.html" className="kt-menu__link ">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">Clients</span>
                      </a>
                    </li>
                    <li className="kt-menu__item " aria-haspopup="true">
                      <a href="inner.html" className="kt-menu__link ">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">Audit</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="kt-menu__section kt-menu__section--first">
                <h4 className="kt-menu__section-text">Account Setting</h4>
                <i className="kt-menu__section-icon flaticon-more-v2" />
              </li>
              <li className="kt-menu__item " aria-haspopup="true">
                <a href="#" className="kt-menu__link ">
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Change password</span>
                </a>
              </li>
              <li className="kt-menu__item " aria-haspopup="true">
                <a href="#" className="kt-menu__link ">
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Change Info</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end:: Aside Menu */}
    </>
  );
};

export default LeftMenu;
