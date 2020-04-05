import React from "react";

import "./Button.css";

const Button = props => {
  const { className, icon, ...otherProps } = props;

  return (
    <button className={`${className} default-btn`} {...otherProps}>
      <div>
        {icon ? <i className={icon} /> : null}
        <a>{props.children}</a>
      </div>
    </button>
  );
};

export default Button;