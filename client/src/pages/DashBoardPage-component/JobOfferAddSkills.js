import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addCompanyJobOffer } from "../../actions/comapny";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button-component/Button";
import Tag from "../../components/common/Tag-component";

import ReCaptcha from "../../components/common/ReCaptcha";
import AddSkillJobForm from "./AddSkillJobForm";

const JobOfferAddSkills = ({ setStep, jobOffer, addCompanyJobOffer }) => {
  const { handleSubmit, errors, setError } = useForm();

  const [verifiedCaptcha, SetVerifiedCaptcha] = useState(false);
  const [contentToRender, setContentToRender] = useState([]);
  const [counterForm, setCounterForm] = useState(0);
  const [allSkills, addToSkills] = useState([]);

  useEffect(() => {
    if (counterForm === 0) {
      return setContentToRender([
        <AddSkillJobForm id={0} onDelete={onDelete} addSkill={addSkill} />,
      ]);
    }
  }, [counterForm, contentToRender.length]);

  //captcha verfication function
  const verifyCallback = (response) => {
    if (response) SetVerifiedCaptcha(!verifiedCaptcha);
  };

  const addForm = () => {
    setCounterForm(counterForm + 1);
    return setContentToRender([
      ...contentToRender,
      <AddSkillJobForm
        id={counterForm + 1}
        onDelete={onDelete}
        addSkill={addSkill}
      />,
    ]);
  };

  const addSkill = (data, id) => {
    addToSkills((state) => [...state, data]);
    setCounterForm(counterForm + 1);
    document.getElementById(id).style.display = "none";
  };

  const onDelete = (id) => {
    setCounterForm(counterForm - 1);
    document.getElementById(id).style.display = "none";
  };

  const onSubmit = () => {
    if (verifiedCaptcha) {
      //dipatch action
      addCompanyJobOffer(jobOffer, allSkills);
      setStep(1);
    } else {
      setError("captch");
    }
  };

  const renderFormComponent = () => {
    return contentToRender.map((form, id) => {
      return <div key={id}>{form}</div>;
    });
  };

  const renderSkillsTag = () => {
    return allSkills.map((skill, i) => {
      return (
        <div style={{ padding: "10px" }} key={skill.name + i}>
          <Tag>{skill.name}</Tag>
        </div>
      );
    });
  };

  return (
    <div className="kt-portlet">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "5px 10px 5px 5px",
        }}
      >
        <Button
          className="btn btn-label-brand btn-sm btn-icon btn-icon-md"
          onClick={() => addForm()}
          icon="flaticon2-add"
        />
      </div>

      <div style={{ padding: "5%" }}>
        {/* rendering skill tags  */}
        {allSkills.length ? (
          <div className="kt-portlet">
            <div style={{ display: "flex" }}>{renderSkillsTag()}</div>
          </div>
        ) : null}
        {/* end skill tags  */}

        {renderFormComponent()}

        {allSkills.length ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "grid",
                padding: "5%",
                justifyContent: "center",
              }}
            >
              <ReCaptcha verifyCallback={(res) => verifyCallback(res)} />
              &nbsp; &nbsp;
              {errors.captch && "please check i'm not robot "}
              &nbsp; &nbsp;
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  className="btn btn-outline-brand btn-square"
                  onClick={() => setStep(1)}
                >
                  Pervious
                </Button>
                &nbsp; &nbsp;
                <Button
                  className="btn btn-outline-brand btn-square"
                  type="submit"
                  disabled={!verifiedCaptcha}
                >
                  Create Job
                </Button>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default connect(null, { addCompanyJobOffer })(JobOfferAddSkills);
