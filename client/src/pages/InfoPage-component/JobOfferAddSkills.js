import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button-component/Button";
import Tag from "../../components/common/Tag-component/";

import ReCaptcha from "../../components/common/ReCaptcha";
import AddSkillJobForm from "./AddSkillJobForm";

const JobOfferAddSkills = ({ setStep }) => {
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
      setStep(1);
    }
    setError("captch");
  };

  const renderFormComponent = () => {
    return contentToRender.map((form, id) => {
      return <div key={id}>{form}</div>;
    });
  };

  const renderSkillsTag = () => {
    return allSkills.map((skill, i) => {
      return (
        <div style={{ marginRight: "10px" }} key={skill.name + i}>
          <Tag>{skill.name}</Tag>
        </div>
      );
    });
  };

  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        <Button
          className="btn btn-outline-brand btn-square"
          onClick={() => addForm()}
        >
          Add another Skill
        </Button>

        {/* rendering skill tags  */}
        <div style={{ display: "flex" }}>{renderSkillsTag()}</div>
        {/* end skill tags  */}
      </div>

      <div className="kt-portlet" style={{ padding: "5%" }}>
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
                >
                  Create Job
                </Button>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </>
  );
};

export default JobOfferAddSkills;
