import React, { useRef } from "react";
import Tag from "../common/Tag-component";
import ButtonModalProfilAdd from "../../pages/UserProfilePage-component/ButtonModalProfilAdd";

const LanguagesCartList = ({ data, selectedMenuSection, deleteLanguage }) => {
  const formRef = useRef();
  console.log(selectedMenuSection);

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__body">
          <div className="kt-portlet kt-portlet--height-fluid">
            {/* header */}
            <div className="kt-portlet__head kt-portlet__head--noborder">
              <div className="kt-portlet__head-label">
                <h3 className="kt-portlet__head-title"></h3>
              </div>
              <div className="kt-portlet__head-toolbar">
                <ButtonModalProfilAdd
                  formRef={formRef}
                  selectedMenuSection={selectedMenuSection}
                />
              </div>
            </div>
            {/* header */}
            <div className="kt-portlet__body" style={{ padding: "0px 5%" }}>
              {/*begin::Widget */}
              <div className="kt-widget kt-widget--user-profile-2">
                <div className="kt-widget__head">
                  <div className="kt-widget__info">
                    <a className="kt-widget__username">Languages</a>
                  </div>
                </div>

                <div className="kt-widget__body" style={{ margin: "5% 0px" }}>
                  <div
                    style={{
                      display: "grid",
                      alignItems: "center",
                      justifyContent: "center",
                      gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                      gridGap: "10px",
                    }}
                  >
                    {data.map(({ id, name }) => (
                      <Tag
                        key={id}
                        id={id}
                        deleteButton={true}
                        action={deleteLanguage}
                      >
                        {name}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*end::Widget */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LanguagesCartList;
