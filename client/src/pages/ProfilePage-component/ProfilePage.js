import React, { Component } from "react";
import { connect } from "react-redux";

//import Modal from "../../components/common/modal-component/Modal";
import ProfileResumeMenu from "../../components/ProfileResumeMenu-component/ProfileResumeMenu";
import InputText from "../../components/common/InputText-component/inputText";

class ProfilePage extends Component {
  state = {
    count: 0,
    resumeSections: []
  };

  componentDidMount() {
    this.setState({
      resumeSections: Object.keys(this.props.profile.resume).slice(1)
    });
  }
  handelChange = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <div>profile Page</div>
        <div>
          <ProfileResumeMenu menu={this.state.resumeSections} />
        </div>
        {/* <div>
          <Modal
            modalName="Add Experience"
            btnOneText="cancel"
            btnTwoText="Save Experience"
            action={this.handelChange}
          />
        </div> */}
        <InputText label="input" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.userProfile
  };
};

export default connect(mapStateToProps, null)(ProfilePage);
