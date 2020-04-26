import React, { Component } from "react";

class PaginationTagElement extends Component {
  state = {
    className: "",
    active: false,
  };

  render() {
    const { className, active } = this.state;
    const { element } = this.props;
    return (
      <>
        <li onClick={this.handelClick} className={active ? className : null}>
          <a onClick={this.props.onClick} href="#">
            {element}
          </a>
        </li>
      </>
    );
  }
}

export default PaginationTagElement;
