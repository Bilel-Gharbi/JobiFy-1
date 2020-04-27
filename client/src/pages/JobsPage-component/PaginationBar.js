import React, { Component } from "react";
import { connect } from "react-redux";
import { fetechJobs } from "../../actions/jobsAction";
import { setPaginationLimit } from "../../actions/ui";
import * as _ from "underscore";

import SetLimitPerPageButton from "./SetLimitPerPageButton";
import PaginationTagElement from "./PaginationTagElement";

class PaginationBar extends Component {
  constructor(props) {
    super(props);
    this.tagRefs = {};
  }

  getOrCreateRef = (id) => {
    if (!this.tagRefs.hasOwnProperty(id)) {
      this.tagRefs[id] = React.createRef();
    }
    return this.tagRefs[id];
  };

  //inti tags styling
  initTagRefs(tagsRefs) {
    _.map(tagsRefs, (el) => {
      if (el.current !== null) {
        el.current.setState({ active: false, className: "" });
      }
    });
  }

  handelClick = (e, id) => {
    e.preventDefault();
    const { limitPagination, fetechJobs } = this.props;

    _.map(this.tagRefs, (el, key) => {
      if (key != id && el.current !== null) {
        el.current.setState({ active: false, className: "" });
      }
    });

    this.tagRefs[id].current.setState({
      className: "kt-pagination__link--active",
      active: true,
    });

    //limit basic pagination
    fetechJobs(id + 1, limitPagination);

    // pagination for search
  };

  renderPaginationTag = () => {
    const { dataLength, limitPagination } = this.props;
    let nbPage = [];
    //set Arr nb page to render pagination bar
    let pages = Math.ceil(dataLength / limitPagination);
    for (var i = 1; i <= pages; i++) {
      nbPage.push(i);
    }

    return nbPage.map((el, i) => {
      return (
        <PaginationTagElement
          key={i}
          element={el}
          ref={this.getOrCreateRef(i)}
          onClick={(e) => this.handelClick(e, i)}
        />
      );
    });
  };

  render() {
    return (
      <>
        <div
          className="kt-pagination  kt-pagination--brand"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px 0px",
          }}
        >
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
          <SetLimitPerPageButton
            initTagRefs={() => this.initTagRefs(this.tagRefs)}
            action={this.props.setPaginationLimit}
            fetch={this.props.fetechJobs}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    limitPagination: state.UI.limit,
    dataLength: state.UI.dataLength,
  };
};
export default connect(mapStateToProps, { fetechJobs, setPaginationLimit })(
  PaginationBar
);
