import React, { useState, useEffect } from "react";

const LeftMenu = (props) => {
  const [subMenu, toggleSubMenu] = useState(true);
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
        <div className="kt-portlet" style={{ width: "100%", height: "100%" }}>
          <div className="kt-aside-menu kt-scroll ps">
            <ul className="kt-menu__nav ">
              <li className="kt-menu__item " aria-haspopup="true">
                <a
                  href="#"
                  className="kt-menu__link "
                  onClick={() => props.setElementToRender("Home")}
                >
                  <i
                    className=" flaticon-squares-3"
                    style={{
                      display: "flex",
                      width: 25,
                      height: 25,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Home</span>
                </a>
              </li>

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
                        <span className="kt-menu__link-text">Candidates</span>
                      </a>
                    </li>

                    {/* end last drop menu  */}
                  </ul>
                </div>
              </li>

              <li className="kt-menu__section kt-menu__section--first">
                <h4 className="kt-menu__section-text">Account Setting</h4>
                <i className="kt-menu__section-icon flaticon-more-v2" />
              </li>
              <li className="kt-menu__item " aria-haspopup="true">
                <a
                  href="#"
                  className="kt-menu__link "
                  onClick={() => props.setElementToRender("compnayInfo")}
                >
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Company Info</span>
                </a>
              </li>

              <li className="kt-menu__item " aria-haspopup="true">
                <a
                  href="#"
                  className="kt-menu__link "
                  onClick={() => props.setElementToRender("changePwd")}
                >
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="kt-menu__link-text">Change password</span>
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
