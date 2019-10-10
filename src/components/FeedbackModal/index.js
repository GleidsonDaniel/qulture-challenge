import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {baseRed, qultureGreen} from '~/helpers/colors';

import {
  Container,
  ContentContainer,
  FeedbackText,
  FeedbackButton,
} from './styles';

export default function FeedbackModal({
  setModal,
  loading,
  error,
  finalMessage,
  okClick,
}) {
  const handleRender = () => {
    if (error) {
      return (
        <ContentContainer>
          <Icon
            name="close-circle-outline"
            color={baseRed}
            size={100}
            style={{marginBottom: 5}}
          />
          <FeedbackText numberOfLines={1}>
            Houve um erro, por favor tente novamente.
          </FeedbackText>
        </ContentContainer>
      );
    }
    if (loading) {
      return (
        <ContentContainer>
          <ActivityIndicator color={qultureGreen} size={100} />
          <Text>Carregando...</Text>
        </ContentContainer>
      );
    }
    return (
      <ContentContainer>
        <Icon
          name="check-circle-outline"
          color={qultureGreen}
          size={100}
          style={{marginBottom: 5}}
        />
        <FeedbackText numberOfLines={1}>{finalMessage}</FeedbackText>
        <FeedbackButton onPress={() => okClick()}>
          <FeedbackText>OK</FeedbackText>
        </FeedbackButton>
      </ContentContainer>
    );
  };
  return (
    <Modal
      isVisible
      onBackdropPress={() => loading === false && setModal()}
      onBackButtonPress={() => loading === false && setModal()}>
      <Container>{handleRender()}</Container>
    </Modal>
  );
}
