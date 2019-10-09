import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

import {qultureGreen} from '~/helpers/colors';

import {
  ModalContainer,
  Container,
  LoadingText,
  ConfirmText,
  ConfirmButtom,
  OkText,
} from './styles';

const ConfirmationModal = ({
  modalVisible,
  loading,
  confirmMessage,
  confirmationCallback,
}) => {
  const handleRender = () => {
    if (loading) {
      return (
        <Container>
          <ActivityIndicator color={qultureGreen} size={100} />
          <LoadingText>Registrando...</LoadingText>
        </Container>
      );
    }
    return (
      <Container>
        <Icon
          name="check-circle-outline"
          color="#7f9928"
          size={100}
          style={{marginBottom: 5}}
        />
        <ConfirmText numberOfLines={1}>{confirmMessage}</ConfirmText>
        <ConfirmButtom onPress={() => modalVisible && confirmationCallback()}>
          <OkText>OK</OkText>
        </ConfirmButtom>
      </Container>
    );
  };

  return (
    <Modal isVisible={modalVisible}>
      <ModalContainer>{handleRender()}</ModalContainer>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  modalVisible: PropTypes.bool,
  loading: PropTypes.bool,
  confirmMessage: PropTypes.string,
  confirmationCallback: PropTypes.func,
};

ConfirmationModal.defaultProps = {
  modalVisible: false,
  loading: true,
  confirmMessage: '',
  confirmationCallback: () => {},
};

export default ConfirmationModal;
