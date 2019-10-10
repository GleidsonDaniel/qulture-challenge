import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #000;
`;

const TakeShotContainer = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

const TakeShotButton = styled.TouchableOpacity`
  flex: 0;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  align-self: center;
  margin: 20px;
`;

export {Container, TakeShotContainer, TakeShotButton};
