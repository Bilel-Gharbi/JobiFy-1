import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Button from "../../components/common/Button-component/Button";

const AddSkillJobForm = (props) => {
  const options = [
    { value: "Beginner", label: "Beginner" },
    { value: "Advanced", label: "Advanced" },
    { value: "Expert", label: "Expert" },
  ];
  const { handleSubmit, register, errors, setError } = useForm();
  const [selectValue, setSelectValue] = useState({ selectedOption: {} });

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption) setError("level");
    setSelectValue({ selectedOption });
  };

  const onSubmit = (data) => {
    if (!data.level) return setError("level");
    props.addSkill(data, props.id);
  };
  return (
    <div className="kt-portlet" style={{ padding: "5%" }} id={props.id}>
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
            <Button className="btn btn-outline-brand btn-square" type="submit">
              Add
            </Button>
            &nbsp; &nbsp;
            <Button
              className="btn btn-outline-brand btn-square"
              type="reset"
              onClick={() => props.onDelete(props.id)}
            >
              delete
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSkillJobForm;
