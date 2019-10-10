import styled from 'styled-components/native';

import {baseGray, grayWhite, baseBlack, baseRed} from '~/helpers/colors';

export const DateButton = styled.TouchableOpacity`
  background-color: ${grayWhite};
  height: 50px;
  border-radius: 5px;
  color: ${baseGray};
  align-items: center;
  justify-content: center;
`;

export const TextError = styled.Text`
  color: ${baseRed};
  font-size: 13;
`;

export const TextLabel = styled.Text`
  color: ${baseBlack};
  font-size: 15;
  margin-bottom: 5;
`;

export const Container = styled.View`
  margin-top: 5px;
`;

export const DateText = styled.Text`
  color: ${baseBlack};
  font-size: 15;
  text-align: center;
`;
