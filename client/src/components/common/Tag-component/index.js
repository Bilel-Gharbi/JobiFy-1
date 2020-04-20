import React from "react";

const Tag = ({ deleteButton, action, id, children }) => {
  const handelClick = () => {
    action(id);
  };
  return (
    <div
      style={{
        padding: "5px",
        background: "rgba(39, 134, 251, 0.1)",
      }}
    >
      <div style={{ position: "relative", padding: "0px" }}>
        <span
          style={{
            color: "#2786fb",
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            margin: "0px 3px 0px 0px",
          }}
        >
          {deleteButton ? (
            <a
              onClick={handelClick}
              className="fa flaticon-cancel"
              style={{
                position: "absolute",
                right: "0%",
                top: "-4%",
                cursor: "pointer",
              }}
            />
          ) : null}

          {children}
        </span>
      </div>
    </div>
  );
};

export default Tag;
