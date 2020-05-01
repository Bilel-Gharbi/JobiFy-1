import React, { useEffect, useState } from "react";

const SetLimitPerPageButton = ({ action, fetch, initTagRefs }) => {
  //init the store UI.limit by the min value of select button, it must be the same
  const [optionSelectValue] = useState([3, 4, 5]);

  const onChangeSelect = (e) => {
    action(e.target.value);
    //todo check before if there is a search query or note be fore refeching data
    fetch(1, e.target.value);
    initTagRefs();
  };

  return (
    <>
      <div className="kt-pagination__toolbar">
        <select
          className="form-control kt-font-brand"
          style={{ width: 60 }}
          onChange={onChangeSelect}
        >
          {optionSelectValue.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SetLimitPerPageButton;
