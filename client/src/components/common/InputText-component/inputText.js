import React from "react";

import "./inputText.css";

const InputText = (props) => {
  const { label, placeholder, onChange, value, name, type } = props;

  return (
    <div className="form-group row">
      <label className="col-3 col-form-label">{label}</label>
      <div className="col-9">
        <input
          className="form-control"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  );
};

export default InputText;
