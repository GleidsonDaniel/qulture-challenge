import styled from 'styled-components/native';

const ModalContainer = styled.View`
  background-color: '';
  padding: 22px;
  border-color: '#FFF';
  border-width: 0.5px;
  border-radius: 5px;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const LoadingText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const ConfirmText = styled.Text`
  font-weight: bold;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

const ConfirmButtom = styled.TouchableOpacity`
  width: 100px;
  height: 35px;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${props => (props.color ? props.color : '#7f9928')};
  border-radius: 3px;
`;

const OkText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export {
  ModalContainer,
  Container,
  LoadingText,
  ConfirmText,
  ConfirmButtom,
  OkText,
};
