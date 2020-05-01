import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setWizardForm } from "../../actions/ui";

const WizardMenu = ({ wizardForm, setWizardForm }) => {
  const [menuList] = useState([
    "Personal Information",
    "Resume Info",
    "Experiences",
    "Educations",
    "Skills",
  ]);

  const renderMenuList = () => {
    return menuList.map((element, idx) => {
      let classActive = "nav-link";
      if (idx + 1 === wizardForm) {
        classActive = "nav-link active";
      }
      return (
        <li key={idx} className="nav-item">
          <a
            href="#"
            className={classActive}
            id={idx + 1}
            onClick={(e) => setWizardForm(parseInt(e.target.id))}
          >
            {element}
          </a>
        </li>
      );
    });
  };
  return (
    <div className="kt-sc__bottom" style={{ width: "80%", margin: "auto" }}>
      <ul
        className="nav nav-tabs  nav-tabs-line"
        role="tablist"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderMenuList()}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    wizardForm: state.UI.wizardForm,
  };
};

export default connect(mapStateToProps, { setWizardForm })(WizardMenu);
