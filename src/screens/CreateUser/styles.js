import styled from 'styled-components/native';

import {blue} from '~/helpers/colors';

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const SendButton = styled.Button`
  background: ${blue};
`;

const ButtonContainer = styled.View`
  margin-top: 30;
  z-index: -1;
`;

const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export {Container, SendButton, ButtonContainer, UserImage};
