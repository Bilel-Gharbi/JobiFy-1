import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button-component/Button";

export const FormUserInfo = ({ next, data, action }) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    next();
    action(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label className="col-3 col-form-label">First Name</label>
          <div className="col-9">
            <input
              name="firstName"
              className="form-control"
              defaultValue={data ? data.firstName : null}
              placeholder="your first name"
              ref={register({ required: "Please enter your firstName" })}
            />
            {errors.firstName && errors.firstName.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Last Name</label>
          <div className="col-9">
            <input
              name="lastName"
              className="form-control"
              placeholder="your last name"
              defaultValue={data ? data.lastName : null}
              ref={register({ required: "Please enter your lastName" })}
            />
            {errors.lastName && errors.lastName.message}
          </div>
        </div>

        <div className="form-group row">
          <label className="col-3 col-form-label">Birth Date </label>
          <div className="col-9">
            <input
              name="birthDate"
              className="form-control"
              type="date"
              defaultValue={data ? data.birthDate : null}
              ref={register({ required: "Please enter your birth date" })}
            />
            {errors.birthDate && errors.birthDate.message}
          </div>
        </div>

        <div className="form-group row">
          <label className="col-3 col-form-label">Location</label>
          <div className="col-9">
            <input
              name="location"
              className="form-control"
              placeholder="your location"
              defaultValue={data ? data.location : null}
              type="text"
              ref={register({ required: "Please enter your location" })}
            />
            {errors.location && errors.location.message}
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
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export const FormUserResumeInfo = ({ data, next, pervious, action }) => {
  const { handleSubmit, errors, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    next();
    action(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label className="col-3 col-form-label">Expertise Level </label>
          <div className="col-9">
            <input
              name="expertiseLevel"
              className="form-control"
              placeholder="junior , senior , expert ..."
              defaultValue={data ? data.expertiseLevel : null}
              ref={register({ required: "Please enter your expertise level" })}
            />
            {errors.expertiseLevel && errors.expertiseLevel.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Summary</label>
          <div className="col-9">
            <textarea
              name="summary"
              className="form-control"
              placeholder="some breef of your summary "
              defaultValue={data ? data.summary : null}
              ref={register({
                required: "Please a breef summary description of your resume ",
              })}
            />
            {errors.summary && errors.summary.message}
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
            onClick={() => pervious()}
          >
            Pervious
          </Button>
          &nbsp; &nbsp;
          <Button className="btn btn-outline-brand btn-square" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export const FormUserExperience = ({ data, next, pervious, action }) => {
  const { handleSubmit, errors, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    next();
    action(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label className="col-3 col-form-label">Start Date</label>
          <div className="col-9">
            <input
              name="startDate"
              className="form-control"
              type="date"
              defaultValue={data ? data.startDate : null}
              ref={register({ required: "Please enter your start date level" })}
            />
            {errors.startDate && errors.startDate.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">End Date</label>
          <div className="col-9">
            <input
              name="endDate"
              className="form-control"
              type="date"
              defaultValue={data ? data.endDate : null}
              ref={register({
                required: "Please enter your end date ",
              })}
            />
            {errors.endDate && errors.endDate.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Company Name</label>
          <div className="col-9">
            <input
              name="companyName"
              className="form-control"
              type="text"
              placeholder="google , facebool , microsoft ..."
              defaultValue={data ? data.companyName : null}
              ref={register({
                required: "Please enter company name for your experience  ",
              })}
            />
            {errors.companyName && errors.companyName.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Position</label>
          <div className="col-9">
            <input
              name="position"
              className="form-control"
              type="text"
              placeholder="CEO CTO ...."
              defaultValue={data ? data.position : null}
              ref={register({
                required: "Please enter your position name",
              })}
            />
            {errors.position && errors.position.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">task</label>
          <div className="col-9">
            <textarea
              name="task"
              className="form-control"
              placeholder="bref description of your task (optional)"
              defaultValue={data ? data.task : null}
              ref={register()}
            />
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
            onClick={() => pervious()}
          >
            Pervious
          </Button>
          &nbsp; &nbsp;
          <Button className="btn btn-outline-brand btn-square" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export const FormUserEducation = ({ data, next, pervious, action }) => {
  const { handleSubmit, errors, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    next();
    action(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label className="col-3 col-form-label">Start Date</label>
          <div className="col-9">
            <input
              name="startDate"
              className="form-control"
              type="date"
              defaultValue={data ? data.startDate : null}
              ref={register({ required: "Please enter your start date" })}
            />
            {errors.startDate && errors.startDate.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">End Date</label>
          <div className="col-9">
            <input
              name="endDate"
              className="form-control"
              type="date"
              defaultValue={data ? data.endDate : null}
              ref={register({
                required: "Please enter your end date ",
              })}
            />
            {errors.endDate && errors.endDate.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Establishment</label>
          <div className="col-9">
            <input
              name="establishment"
              className="form-control"
              type="text"
              placeholder="Establishement name"
              defaultValue={data ? data.establishment : null}
              ref={register({
                required: "Please enter company name for your experience  ",
              })}
            />
            {errors.establishment && errors.establishment.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">diploma Major</label>
          <div className="col-9">
            <input
              name="diplomaMajor"
              className="form-control"
              type="text"
              placeholder="web desgin , IT , devOps ..."
              defaultValue={data ? data.diplomaMajor : null}
              ref={register({
                required: "Please enter your diploma major ",
              })}
            />
            {errors.diplomaMajor && errors.diplomaMajor.message}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Diploma Type</label>
          <div className="col-9">
            <input
              name="diplomaType"
              className="form-control"
              placeholder="Engenier , BBA , Master , PHD"
              defaultValue={data ? data.diplomaType : null}
              ref={register({
                required: "Please enter your diploma type",
              })}
            />
          </div>
          {errors.diplomaType && errors.diplomaType.message}
        </div>

        <div className="form-group row">
          <label className="col-3 col-form-label">Description</label>
          <div className="col-9">
            <textarea
              name="description"
              className="form-control"
              placeholder="optional description "
              defaultValue={data ? data.description : null}
              ref={register()}
            />
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
            onClick={() => pervious()}
          >
            Pervious
          </Button>
          &nbsp; &nbsp;
          <Button className="btn btn-outline-brand btn-square" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export const FormUserSkill = ({ data, next, pervious, action }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    next();
    action(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label className="col-3 col-form-label">Skill Name</label>
          <div className="col-9">
            <input
              name="name"
              className="form-control"
              placeholder="java , nodejs , react , ..."
              defaultValue={data ? data.name : null}
              ref={register({ required: "please enter one skill" })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-3 col-form-label">Skill Level </label>
          <div className="col-9">
            <input
              name="level"
              className="form-control"
              defaultValue={data ? data.level : null}
              placeholder="Noob , expert , advanced ...."
              ref={register()}
            />
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
            onClick={() => pervious()}
          >
            Pervious
          </Button>
          &nbsp; &nbsp;
          <Button className="btn btn-outline-brand btn-square" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export const FormCompanyInfo = ({ action }) => {
  const { register, handleSubmit, errors } = useForm();
  const [bgPhoto, setBgPhoto] = useState();

  const handlePhotoChange = () => {
    let photo = document.getElementsByName("companyPhoto")[0].files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBgPhoto(reader.result);
    };
    if (photo) {
      reader.readAsDataURL(photo);
      setBgPhoto(reader.result);
    }
  };

  const onSubmit = (data) => {
    const {
      companyName,
      companyDescription,
      type,
      phoneNumber,
      location,
      companyPhoto,
    } = data;
    const formData = new FormData();

    formData.append("companyPhoto", companyPhoto[0]);
    formData.append("companyName", companyName);
    formData.append("companyDescription", companyDescription);
    formData.append("type", type);
    formData.append("phoneNumber", phoneNumber);
    formData.append("location", location);
    //dispatch action
    action(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="kt-portlet__body">
          <div className="kt-section kt-section--first">
            <div className="kt-section__body">
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  {/* removed label */}
                </label>
                <div
                  className="col-lg-9 col-xl-6"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="kt-avatar kt-avatar--outline"
                    id="kt_user_avatar"
                  >
                    <div
                      className="kt-avatar__holder"
                      style={{
                        backgroundImage: `url(${bgPhoto || null})`,
                      }}
                    />
                    <label
                      className="kt-avatar__upload"
                      data-toggle="kt-tooltip"
                      data-original-title="Change avatar"
                    >
                      <i className="fa fa-pen" />
                      <input
                        type="file"
                        name="companyPhoto"
                        accept=".png, .jpg, .jpeg"
                        onChange={handlePhotoChange}
                        ref={register({ required: "upload companay logo" })}
                      />
                    </label>
                    <span
                      className="kt-avatar__cancel"
                      data-toggle="kt-tooltip"
                      data-original-title="Cancel avatar"
                    >
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
                {errors.companyPhoto && errors.companyPhoto.message}
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Company Name
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    ref={register({ required: "please fill Company Name" })}
                  />
                  {errors.companyName && errors.companyName.message}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Company description
                </label>
                <div className="col-lg-9 col-xl-6">
                  <textarea
                    className="form-control"
                    name="companyDescription"
                    type="text"
                    placeholder="company description"
                    ref={register({
                      required: "please fill Company Description",
                    })}
                  />
                  {errors.companyDescription &&
                    errors.companyDescription.message}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Location
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    name="location"
                    type="text"
                    placeholder="Company Location"
                    ref={register({ required: "please fill your location" })}
                  />
                  {errors.location && errors.location.message}
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Company Type
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    name="type"
                    type="text"
                    placeholder="Company type , SS2I , IT , ..."
                    ref={register({ required: "please fill company type" })}
                  />
                  {errors.type && errors.type.message}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Contact Phone
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-phone" />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone"
                      placeholder="Phone Number"
                      ref={register({
                        required: "please fill company phone number",
                      })}
                    />
                  </div>
                  {errors.phoneNumber && errors.phoneNumber.message}
                </div>
              </div>
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
              Create Company Profile
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
