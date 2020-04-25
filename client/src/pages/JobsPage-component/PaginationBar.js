import React, { Component } from "react";
import * as _ from "underscore";

class PaginationElement extends Component {
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
          <a onClick={this.props.onClick} href={`?page=${element}`}>
            {element}
          </a>
        </li>
      </>
    );
  }
}

class PaginationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbPage: [1, 2, 3, 4, 5],
    };
    this.tagRefs = {};
  }

  getOrCreateRef = (id) => {
    if (!this.tagRefs.hasOwnProperty(id)) {
      this.tagRefs[id] = React.createRef();
    }
    return this.tagRefs[id];
  };

  renderPaginationTag = () => {
    return this.state.nbPage.map((el, i) => {
      return (
        <PaginationElement
          key={i}
          element={el}
          ref={this.getOrCreateRef(i)}
          onClick={(e) => this.handelClick(e, i)}
        />
      );
    });
  };
  handelClick = (e, id) => {
    e.preventDefault();
    /* console.log(this.tagRefs[id].current);
    console.log(this.tagRefs); */

    _.map(this.tagRefs, (el, key) => {
      if (key != id) {
        el.current.setState({ active: false, className: "" });
      }
    });

    this.tagRefs[id].current.setState({
      className: "kt-pagination__link--active",
      active: true,
    });
  };

  render() {
    return (
      <div className="kt-pagination  kt-pagination--brand">
        <ul className="kt-pagination__links">
          <li className="kt-pagination__link--next">
            <a href="#">
              <i className="fa fa-angle-left kt-font-brand" />
            </a>
          </li>
          {this.renderPaginationTag()}
          <li className="kt-pagination__link--prev">
            <a href="#">
              <i className="fa fa-angle-right kt-font-brand" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PaginationBar;
