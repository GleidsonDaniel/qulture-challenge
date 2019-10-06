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

import user from '~/assets/icons/user/user.png';

const CollaboratorCard = ({collaborator}) => {
  const httpRegex = /^(http|https)/;
  const imageVerify = () => {
    if (
      httpRegex.test(collaborator.photo_url) &&
      !collaborator.photo_url.includes('imgur')
    ) {
      return {
        uri: collaborator.photo_url,
      };
    }
    return user;
  };
  return (
    <Card>
      <Container>
        <Avatar source={imageVerify()} resizeMode="cover" />
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
};

CollaboratorCard.defaultProps = {
  collaborator: {
    photo_url: '',
    name: '',
    email: '',
    admission_date: '',
    job_title: '',
  },
};

export default memo(CollaboratorCard);
