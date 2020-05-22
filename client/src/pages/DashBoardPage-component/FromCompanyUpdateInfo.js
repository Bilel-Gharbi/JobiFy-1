import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button-component/Button";
import Btn from "../../components/common/ModalDashboard-component/ModalDashboard";

import { UpdateInfoModalForm } from "./ModalForms";

const FormCompanyUpdateInfo = ({ action, data }) => {
  const { register, handleSubmit, errors, setError, clearError } = useForm();
  const [bgPhoto, setBgPhoto] = useState();
  const [formInfo, setFromInfo] = useState();
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setError(e.target.name, "required", `please fill ${e.target.name} filed`);
      setDisabled(true);
    } else {
      clearError(e.target.name);
      setDisabled(false);
    }
  };

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

    formData.append("companyPhoto", companyPhoto[0] || data.logo);
    formData.append("companyName", companyName);
    formData.append("companyDescription", companyDescription);
    formData.append("type", type);
    formData.append("phoneNumber", phoneNumber);
    formData.append("location", location);

    setFromInfo(formData);
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
                        backgroundImage: `url(${bgPhoto || data.logo || null})`,
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
                        ref={register()}
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
                    onChange={handleInputChange}
                    defaultValue={data.companyName || null}
                    placeholder="Company Name"
                    ref={register}
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
                    onChange={handleInputChange}
                    placeholder="company description"
                    defaultValue={data.companyDescription || null}
                    ref={register}
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
                    onChange={handleInputChange}
                    placeholder="Company Location"
                    defaultValue={data.location || null}
                    ref={register}
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
                    onChange={handleInputChange}
                    placeholder="Company type , SS2I , IT , ..."
                    defaultValue={data.type || null}
                    ref={register}
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
                      type="number"
                      name="phoneNumber"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      defaultValue={data.phoneNumber || null}
                      ref={register}
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
            <Btn
              title="Update Company Profile"
              btn={
                <Button
                  className="btn btn-outline-brand btn-square"
                  type="submit"
                  disabled={disabled}
                >
                  Update Company Profile
                </Button>
              }
              body={<UpdateInfoModalForm action={() => action(formInfo)} />}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default FormCompanyUpdateInfo;
