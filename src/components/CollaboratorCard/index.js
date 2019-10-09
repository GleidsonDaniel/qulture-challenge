/* eslint-disable camelcase */
import React, {memo} from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import {
  Container,
  Avatar,
  Name,
  Email,
  AdmissionDate,
  JobTitle,
} from './styles';

import collaboratorImageVerify from '~/functions/collaboratorImageVerify';

const CollaboratorCard = ({collaborator, onPress}) => {
  return (
    <Card onPress={onPress}>
      <Container>
        <Avatar
          source={collaboratorImageVerify(collaborator.photo_url)}
          resizeMode="cover"
        />
        <Name>{collaborator.name}</Name>
        <Email>{collaborator.email}</Email>
        <AdmissionDate>{collaborator.admission_date}</AdmissionDate>
        <JobTitle>{collaborator.job_title}</JobTitle>
      </Container>
    </Card>
  );
};

CollaboratorCard.propTypes = {
  collaborator: PropTypes.shape({
    photo_url: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    admission_date: PropTypes.string,
    job_title: PropTypes.string,
  }),
  onPress: PropTypes.func,
};

CollaboratorCard.defaultProps = {
  collaborator: {
    photo_url: '',
    name: '',
    email: '',
    admission_date: '',
    job_title: '',
  },
  onPress: () => {},
};

export default memo(CollaboratorCard);
