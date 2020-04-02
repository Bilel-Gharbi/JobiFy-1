import React, { Component } from "react";

import Modal from "../../components/common/modal-component/Modal";

class ProfilePage extends Component {
  state = {
    count: 0,
    disable: true
  };

  handelChange = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        profile Page
        <div>
          <Modal
            modalName="Add Experience"
            btnOneText="cancel"
            btnTwoText="Save Experience"
            action={this.handelChange}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
