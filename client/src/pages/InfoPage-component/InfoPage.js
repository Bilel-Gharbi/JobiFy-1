import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import RightDashBordConatainer from "./RightDashBordConatainer";

const InfoPage = () => {
  const [elementToRender, setElementToRender] = useState();

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <LeftMenu setElementToRender={setElementToRender} />
        <RightDashBordConatainer elementToRender={elementToRender} />
      </div>
    </>
  );
};

export default InfoPage;
