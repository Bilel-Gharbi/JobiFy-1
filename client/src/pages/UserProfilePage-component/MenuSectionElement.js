import React, { Component, useRef } from "react";

export default class MenuSectionElement extends Component {
  render() {
    return (
      <a
        className="kt-widget__item kt-widget__item-"
        onClick={this.props.onClick}
      >
        <span className="kt-widget__section">
          <span className="kt-widget__icon">
            <i
              className={`${this.props.icon}`}
              style={{ marginRight: "10px", marginLeft: "5px" }}
            />
          </span>
          <span className="kt-widget__desc">{this.props.section}</span>
        </span>
        {this.props.nb ? (
          <span className="kt-badge kt-badge--unified-danger kt-badge--sm kt-badge--rounded kt-badge--bolder">
            {this.props.nb}
          </span>
        ) : null}
      </a>
    );
  }
}
