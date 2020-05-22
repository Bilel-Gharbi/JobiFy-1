import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Button from "../../components/common/Button-component/Button";

const FormAddJobOffer = ({ setStep, setJobOffer }) => {
  const { handleSubmit, register, watch, errors, setError } = useForm();

  const options = [
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
    { value: "Remote", label: "Remote" },
  ];
  const [selectValue, setSelectValue] = useState({ selectedOption: [] });

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption) setError("JobContractType");
    setSelectValue({ selectedOption });
  };

  const onSubmit = (data) => {
    if (!data.JobContractType) return setError("JobContractType");

    setStep(2);
    setJobOffer(data);
  };
  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%", height: "100%" }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "0 120px" }}>
          <div className="form-group row">
            <label className="col-3 col-form-label">Job Position</label>
            <div className="col-9">
              <input
                name="jobPosition"
                className="form-control"
                placeholder="job postion "
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
                name="JobContractType"
                placeholder="Choose contract type "
                value={selectValue.value}
                options={options}
                onChange={handleSelectChange}
                ref={() => {
                  register({
                    name: "JobContractType",
                    value: selectValue.selectedOption.value,
                    required: true,
                    validate: (value) => {
                      return value ? value.length > 0 : !!value;
                    },
                  });
                }}
              />
              {errors.JobContractType && "please select contract type"}
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
                ref={register({
                  required: "Please contract type",
                  validate: (value) =>
                    value < parseInt(watch("jobMaxSalary")) ||
                    "Max salary shoud be less than Max salary ",
                })}
              />
              {errors.jobMinSalary && errors.jobMinSalary.message}
            </div>

            <div className="col-5">
              <input
                name="jobMaxSalary"
                className="form-control"
                placeholder="job MAX salary"
                type="number"
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
          <div className="form-group row">
            <label className="col-3 col-form-label">Expiration date </label>
            <div className="col-9">
              <input
                name="jobExpirationDate"
                className="form-control"
                type="date"
                //defaultValue={data ? data.birthDate : null}
                ref={register({ required: "enter jobExpirationDate" })}
              />
              {errors.jobExpirationDate && errors.jobExpirationDate.message}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button className="btn btn-outline-brand btn-square" type="submit">
              Create Job
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAddJobOffer;
