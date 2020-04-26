import React from "react";

const SaveButton = ({ save, saveButtonProps, disabled }) => {
  //console.log(saveButtonText);
  return (
    <>
      <button
        type="button"
        className="btn btn-brand btn-sm btn-upper"
        onClick={save}
        disabled={disabled}
      >
        <a className={`${saveButtonProps.icon}`}> {saveButtonProps.text}</a>
      </button>
    </>
  );
};

export default SaveButton;
