import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {Input, TextError, TextLabel, Container} from './styles';

const BaseInput = ({
  label,
  onSubmitEditing,
  onChangeText,
  error,
  errorMessage,
  value,
  editable,
}) => {
  return (
    <Container>
      {!!label && <TextLabel>{label}</TextLabel>}
      <Input
        value={value}
        editable={editable}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
      />
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
  value: PropTypes.string,
  editable: PropTypes.bool,
};

BaseInput.defaultProps = {
  label: '',
  onSubmitEditing: () => {},
  onChangeText: () => {},
  error: false,
  errorMessage: '',
  value: '',
  editable: true,
};

export default memo(BaseInput);
