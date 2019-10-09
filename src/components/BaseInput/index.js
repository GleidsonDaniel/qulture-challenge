import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {Input, TextError, TextLabel, Container} from './styles';

const BaseInput = ({
  label,
  onSubmitEditing,
  onChangeText,
  error,
  errorMessage,
}) => {
  return (
    <Container>
      {!!label && <TextLabel>{label}</TextLabel>}
      <Input onSubmitEditing={onSubmitEditing} onChangeText={onChangeText} />
      {!!error && <TextError>{errorMessage}</TextError>}
    </Container>
  );
};

BaseInput.propTypes = {
  label: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  onChangeText: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

BaseInput.defaultProps = {
  label: '',
  onSubmitEditing: () => {},
  onChangeText: () => {},
  error: false,
  errorMessage: '',
};

export default memo(BaseInput);
