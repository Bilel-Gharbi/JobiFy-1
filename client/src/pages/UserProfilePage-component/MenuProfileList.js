import React, { Component } from "react";
import { connect } from "react-redux";
import { setProfileSectionToRender } from "../../actions/ui";

const MenuSectionElement = React.lazy(() => import("./MenuSectionElement"));

class MenuProfileList extends Component {
  constructor(props) {
    super(props);
    //Muti child Refs
    this.sectionReferences = {};
  }
  //to pass multiple refs
  getOrCreateRef(id) {
    if (!this.sectionReferences.hasOwnProperty(id)) {
      this.sectionReferences[id] = React.createRef();
    }
    return this.sectionReferences[id];
  }
  handelClick = (e, id) => {
    e.preventDefault();
    this.props.setProfileSectionToRender(
      this.sectionReferences[id].current.props.section
    );
  };
  renderMenu = () => {
    const { list } = this.props;
    return list.map((el, idx) => {
      return (
        <MenuSectionElement
          key={idx}
          id={idx}
          ref={this.getOrCreateRef(idx)}
          icon={el.icon}
          section={el.section}
          nb={el.nb}
          onClick={(e) => this.handelClick(e, idx)}
        />
      );
    });
  };

  render() {
    return (
      <div className="kt-widget__body">
        <div className="kt-widget__items">
          <a className="kt-widget__item kt-widget__item">
            <span className="kt-widget__section">
              <span className="kt-widget__icon">
                <i
                  className="flaticon2-settings"
                  style={{ marginRight: "10px", marginLeft: "5px" }}
                />
              </span>
              <span
                className="kt-widget__desc"
                onClick={() => this.props.setProfileSectionToRender("")}
              >
                Personal Information
              </span>
            </span>
          </a>
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}

export default connect(null, { setProfileSectionToRender })(MenuProfileList);
