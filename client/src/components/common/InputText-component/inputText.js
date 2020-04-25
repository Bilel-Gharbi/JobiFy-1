import React from "react";

import "./inputText.css";

const InputText = (props) => {
  const { label, placeholder, onChange, value, name, type, disabled } = props;

  let dateString = "";
  if (type === "date") dateString = value.slice(0, 10);

  return (
    <div className="form-group row">
      <label className="col-3 col-form-label">{label}</label>
      <div className="col-9">
        <input
          className="form-control"
          type={type}
          value={dateString || value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputText;
