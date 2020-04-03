import React from "react";

import "./inputText.css";

const InputText = props => {
  const { label, placeholder, onChange, value, name, type } = props;

  return (
    <div className="InputText">
      <label>
        <strong>{label}</strong>
      </label>
      <input
        className="Input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
