import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 5px;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 150px;
`;

const Name = styled.Text`
  font-size: 17px;
  text-align: center;
`;

const Email = styled.Text`
  font-size: 13px;
  text-align: center;
`;

const AdmissionDate = styled.Text`
  font-size: 12px;
`;

const JobTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  margin-top: 5px;
`;

export {Container, Avatar, Name, Email, AdmissionDate, JobTitle};
