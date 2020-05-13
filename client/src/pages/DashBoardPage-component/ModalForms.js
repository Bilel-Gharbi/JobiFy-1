import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Button from "../../components/common/Button-component/Button";

export const AddSkillModalForm = (props) => {
  const options = [
    { value: "Beginner", label: "Beginner" },
    { value: "Advanced", label: "Advanced" },
    { value: "Expert", label: "Expert" },
  ];
  const [selectValue, setSelectValue] = useState({ selectedOption: {} });
  const { handleSubmit, register, errors, setError } = useForm();

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption) setError("level");
    setSelectValue({ selectedOption });
  };

  const onSubmit = (data) => {
    if (!data.level) return setError("level");
    props.action(data, props.jobId);
  };
  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row">
            <label className="col-3 col-form-label">Skill</label>
            <div className="col-9">
              <input
                name="name"
                className="form-control"
                placeholder="Skill name "
                ref={register({
                  required: "Please enter skill name",
                })}
              />
              {errors.name && errors.name.message}
            </div>
          </div>

          <div className="form-group row">
            <label className="col-3 col-form-label">Skill Level</label>
            <div className="col-9">
              <Select
                name="level"
                placeholder="Choose skill level "
                value={selectValue.value}
                options={options}
                onChange={handleSelectChange}
                ref={() => {
                  register({
                    name: "level",
                    value: selectValue.selectedOption.value,
                    required: true,
                  });
                }}
              />
              {errors.level && "please select level"}
            </div>
          </div>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                className="btn btn-outline-brand btn-square"
                type="submit"
              >
                Add Skill
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export const UpdateJobOfferForm = ({ action, job }) => {
  const { handleSubmit, register, watch, errors, setError } = useForm();

  const options = [
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
    { value: "Remote", label: "Remote" },
  ];

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption) setError("jobContractType");
    setSelectValue({ selectedOption });
  };

  const [selectValue, setSelectValue] = useState({ selectedOption: [] });

  const onSubmit = (data) => {
    if (!data.jobContractType) return setError("jobContractType");
    action(job.id);
  };

  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row">
            <label className="col-3 col-form-label">Job Position</label>
            <div className="col-9">
              <input
                name="jobPosition"
                className="form-control"
                placeholder="job postion "
                defaultValue={job.jobPosition || null}
                ref={register({ required: "Please enter job position title" })}
              />
              {errors.jobPosition && errors.jobPosition.message}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Job Description</label>
            <div className="col-9">
              <textarea
                name="jobDescription"
                className="form-control"
                placeholder="job description "
                defaultValue={job.jobDescription || null}
                ref={register({
                  required: "Please enter your job description",
                })}
              />
              {errors.jobDescription && errors.jobDescription.message}
            </div>
          </div>

          <div className="form-group row">
            <label className="col-3 col-form-label">contract type</label>
            <div className="col-9">
              <Select
                name="jobContractType"
                placeholder="Choose contract type "
                value={selectValue.value}
                options={options}
                onChange={handleSelectChange}
                ref={() => {
                  register({
                    name: "jobContractType",
                    value: selectValue.selectedOption.value,
                    required: true,
                    validate: (value) => {
                      return value ? value.length > 0 : !!value;
                    },
                  });
                }}
              />
              {errors.jobContractType && errors.jobContractType.message}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label"> Job salary </label>
            <div className="col-4">
              <input
                name="jobMinSalary"
                className="form-control"
                placeholder="job MIN salary"
                type="number"
                defaultValue={job.jobMinSalary || null}
                ref={register({
                  required: "Please contract type",
                  validate: (value) =>
                    value < parseInt(watch("jobMaxSalary")) ||
                    "Max salary shoud be less than Max salary ",
                })}
              />
              {errors.jobMinSalary && errors.jobMinSalary.message}
            </div>

            <div className="col-4">
              <input
                name="jobMaxSalary"
                className="form-control"
                placeholder="job MAX salary"
                type="number"
                defaultValue={job.jobMaxSalary || null}
                ref={register({
                  required: "Please contract type",
                  validate: (value) =>
                    value > parseInt(watch("jobMinSalary")) ||
                    "Max salary shoud be greater than Min salary ",
                })}
              />
              {errors.jobMaxSalary && errors.jobMaxSalary.message}
            </div>
          </div>
          {/*  <div className="form-group row">
            <label className="col-3 col-form-label">Expiration date </label>
            <div className="col-9">
              <input
                name="jobExpirationDate"
                className="form-control"
                type="date"
                ref={register({ required: "enter jobExpirationDate" })}
              />
              {errors.jobExpirationDate && errors.jobExpirationDate.message}
            </div>
          </div> */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button className="btn btn-outline-brand btn-square" type="submit">
              Update Job
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
