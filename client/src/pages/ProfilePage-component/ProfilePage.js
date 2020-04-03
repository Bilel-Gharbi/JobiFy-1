import React, { Component } from "react";
import { connect } from "react-redux";

//import Modal from "../../components/common/modal-component/Modal";
import ProfileResumeMenu from "../../components/ProfileResumeMenu-component/ProfileResumeMenu";
import InputText from "../../components/common/InputText-component/inputText";
import Form from "../../components/common/Form-component/Form";
//import { Form } from "reactstrap";

class ProfilePage extends Component {
  state = {
    resumeSections: []
  };

  componentDidMount() {
    this.setState({
      resumeSections: Object.keys(this.props.profile.resume).slice(1)
    });
  }

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

        <Form
          formState={{ name: "", email: "", check: false }}
          types={["text", "text", "checkbox"]}
        />
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
