import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Button from "../../components/common/Button-component/Button";
import { DoneButton, WarningButton } from "../../components/common/SVG-Buttons";

export const AddSkillModalForm = (props) => {
  const options = [
    { value: "Beginner", label: "Beginner" },
    { value: "Advanced", label: "Advanced" },
    { value: "Expert", label: "Expert" },
  ];
  const [selectValue, setSelectValue] = useState({ selectedOption: {} });

  const [submited, setSubmited] = useState(false);

  const { handleSubmit, register, errors, setError } = useForm();

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption) setError("level");
    setSelectValue({ selectedOption });
  };

  const onSubmit = (data) => {
    if (!data.level) return setError("level");
    props.action(props.jobId, data);
    setSubmited(true);
  };
  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        {!submited ? (
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
        ) : (
          <>
            <DoneButton />
            <h3 style={{ textAlign: "center" }}> Skill added </h3>
          </>
        )}
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
  const [selectValue, setSelectValue] = useState({ selectedOption: [] });
  const [submited, setSubmited] = useState(false);

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption) setError("JobContractType");
    setSelectValue({ selectedOption });
  };

  const onSubmit = (data) => {
    if (!data.JobContractType) return setError("JobContractType");
    action(job.id, data);
    setSubmited(true);
  };

  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        {!submited ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row">
              <label className="col-3 col-form-label">Job Position</label>
              <div className="col-9">
                <input
                  name="jobPosition"
                  className="form-control"
                  placeholder="job position "
                  defaultValue={job.jobPosition || null}
                  ref={register({
                    required: "Please enter job position title",
                  })}
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
                  name="JobContractType"
                  placeholder="Choose contract type "
                  value={selectValue.value}
                  defaultValue={{
                    label: job.JobContractType,
                    value: job.JobContractType,
                  }}
                  options={options}
                  onChange={handleSelectChange}
                  ref={() => {
                    register({
                      name: "JobContractType",
                      value:
                        selectValue.selectedOption.value || job.JobContractType,
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
                Update Job
              </Button>
            </div>
          </form>
        ) : (
          <>
            <DoneButton />
            <h3 style={{ textAlign: "center" }}> Job offer updated </h3>
          </>
        )}
      </div>
    </>
  );
};

export const ConfirmationModalForm = ({ message, ...props }) => {
  const [submited, setSubmited] = useState(false);

  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    props.action();
    setSubmited(true);
  };
  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        {!submited ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row" style={{ display: "grid" }}>
              <WarningButton />
              <h3 style={{ textAlign: "center" }}>
                {message
                  ? message
                  : "Are you sur you want to delete this job offer"}
              </h3>
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
                  Yes I confirm
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <>
            <DoneButton />
            <h3 style={{ textAlign: "center" }}> Job Offer deleted </h3>
          </>
        )}
      </div>
    </>
  );
};

export const UpdateInfoModalForm = (props) => {
  const [submited, setSubmited] = useState(false);

  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    props.action();
    setSubmited(true);
  };
  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        {!submited ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row" style={{ display: "grid" }}>
              <WarningButton />
              <h3 style={{ textAlign: "center" }}>
                Are you sur you want to update company Info
              </h3>
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
                  Yes I confirm
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <>
            <DoneButton />
            <h3 style={{ textAlign: "center" }}> Done </h3>
          </>
        )}
      </div>
    </>
  );
};

export const AcceptCandidateModalForm = ({ action, application }) => {
  const [submited, setSubmited] = useState(false);
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    setSubmited(true);
    action(application.id, true, { data, application });
  };
  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        {!submited ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row">
              <label className="col-3 col-form-label">Interview Date</label>
              <div className="col-9">
                <input
                  name="interviewDate"
                  className="form-control"
                  type="date"
                  placeholder="choose interview date "
                  ref={register({
                    required: "Please fill the interview date",
                  })}
                />
                {errors.interviewDate && errors.interviewDate.message}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">At </label>
              <div className="col-9">
                <input
                  name="hour"
                  className="form-control"
                  type="time"
                  placeholder="choose interview date "
                  ref={register({
                    required: "Please fill the interview hour",
                  })}
                />
                {errors.hour && errors.hour.message}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">Message</label>
              <div className="col-9">
                <textarea
                  name="mail"
                  className="form-control"
                  placeholder="message to candidate "
                  ref={register({
                    required: "Please fill message filed",
                  })}
                />
                {errors.mail && errors.mail.message}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                className="btn btn-outline-brand btn-square"
                type="submit"
              >
                Accept
              </Button>
            </div>
          </form>
        ) : (
          <>
            <DoneButton />
            <h3 style={{ textAlign: "center" }}> Candidate Accepted </h3>
          </>
        )}
      </div>
    </>
  );
};

export const ConfirmationRejectCandidateModalForm = ({
  application,
  action,
}) => {
  const [submited, setSubmited] = useState(false);

  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSubmited(true);
    action(application.id, false);
  };
  return (
    <>
      <div className="kt-portlet" style={{ padding: "5%" }}>
        {!submited ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row" style={{ display: "grid" }}>
              <WarningButton />
              <h3 style={{ textAlign: "center" }}>
                Are you sur you want to Reject this Candidate
              </h3>
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
                  Yes I confirm
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <>
            <DoneButton />
            <h3 style={{ textAlign: "center" }}> Job Offer deleted </h3>
          </>
        )}
      </div>
    </>
  );
};
