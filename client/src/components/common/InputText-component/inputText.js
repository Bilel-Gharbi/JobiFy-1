import React from "react";

import "./inputText.css";

const InputText = props => {
  const { label, placeholder, onChange } = props;

  return (
    <div className="InputText">
      <label>
        <strong>{label}</strong>
      </label>
      <input className="Input" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputText;
