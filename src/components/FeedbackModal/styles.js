import styled from 'styled-components/native';
import {qultureGreen} from '~/helpers/colors';

const Container = styled.View`
  background-color: #ecf0f1;
  padding: 22px;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.View`
  padding-top: 10px;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const FeedbackText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #6a696f;
  font-size: 20px;
  margin-bottom: 15px;
`;

const FeedbackButton = styled.TouchableOpacity`
  width: 100;
  height: 35;
  background-color: ${qultureGreen};
  border-radius: 3px;
`;

export {Container, ContentContainer, FeedbackText, FeedbackButton};
