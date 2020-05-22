import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import RightDashboardConatainer from "./RightDashboardConatainer";

const InfoPage = () => {
  const [elementToRender, setElementToRender] = useState();

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <LeftMenu setElementToRender={setElementToRender} />
        <RightDashboardConatainer elementToRender={elementToRender} />
      </div>
    </>
  );
};

export default InfoPage;
