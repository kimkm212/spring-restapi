import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class AlertModal extends Component {

  state = { modalOpen: this.props.open };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
          /*    trigger={<Button onClick={this.handleOpen}>Show Modal</Button>} */
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content="Cookies policy" />
        <Modal.Content>
          <h3>{this.props.cont}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={this.handleClose} inverted>
            <Icon name="checkmark" />확인
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

AlertModal.propTypes = {
  open: PropTypes.bool,
  cont: PropTypes.string,
};

AlertModal.defaultProps = {
  open: false,
  cont: '확인',
};

export default AlertModal;
