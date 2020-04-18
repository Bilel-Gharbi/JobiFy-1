import React from "react";

/* import "./Button.css"; */

const Button = (props) => {
  const { className, icon, customButton, children, ...otherProps } = props;

  const renderButton = () => {
    //if we i have custom design button
    if (customButton) {
      return <div {...otherProps}>{customButton}</div>;
    } else {
      //basic cusstem btn
      return (
        <button className={`${className} default-btn`} {...otherProps}>
          <div>
            {icon ? <i className={icon} /> : null}
            <a>{children}</a>
          </div>
        </button>
      );
    }
  };

  return <>{renderButton()}</>;
};

export default Button;
