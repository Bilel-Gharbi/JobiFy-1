import React from "react";
import { connect } from "react-redux";
import { setWizardForm } from "../../actions/ui";
import Button from "../../components/common/Button-component/Button";

const WizardButtons = ({ wizardForm, setWizardForm }) => {
  const next = () => {
    setWizardForm(wizardForm++);
  };

  const pervious = () => {
    setWizardForm(wizardForm--);
  };

  const handelSubmit = () => {
    console.log("dispatch actiosn here !!");
  };

  const renderButtons = () => {
    switch (wizardForm) {
      case 0:
        return (
          <Button className="btn btn-outline-brand btn-square" onClick={next}>
            Start
          </Button>
        );

      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return (
          <>
            <Button
              className="btn btn-outline-brand btn-square"
              onClick={pervious}
            >
              Pervious
            </Button>
            &nbsp; &nbsp;
            <Button className="btn btn-outline-brand btn-square" onClick={next}>
              next
            </Button>
          </>
        );
      case 6:
        return (
          <>
            <Button
              className="btn btn-outline-brand btn-square"
              onClick={pervious}
            >
              Pervious
            </Button>
            {/*  &nbsp; &nbsp;
            <Button
              className="btn btn-outline-brand btn-square"
              onClick={handelSubmit}
            >
              Submit
            </Button> */}
          </>
        );

      default:
        return (
          <Button className="btn btn-outline-brand btn-square" onClick={next}>
            Start
          </Button>
        );
    }
  };
  const renderButtonWizard = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderButtons()}
      </div>
    );
  };
  return <>{renderButtonWizard()}</>;
};

const mapStateToProps = (state) => {
  return {
    wizardForm: state.UI.wizardForm,
  };
};
export default connect(mapStateToProps, { setWizardForm })(WizardButtons);
