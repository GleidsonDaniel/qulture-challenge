import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import {DateButton, TextError, TextLabel, Container, DateText} from './styles';

const DatePickerInput = ({
  label,
  error,
  errorMessage,
  value,
  selectDate,
  editable,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <Container>
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          is24Hour
          display="default"
          onChange={(event, date) => {
            if (date) selectDate(moment(date).format('YYYY-MM-DD'));
            setShowDatePicker(false);
          }}
        />
      )}
      {!!label && <TextLabel>{label}</TextLabel>}
      <DateButton disabled={editable} onPress={() => setShowDatePicker(true)}>
        <DateText>{value || 'Selecione aqui a data de admissão'}</DateText>
      </DateButton>
      {!!error && <TextError>{errorMessage}</TextError>}
    </Container>
  );
};

DatePickerInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  selectDate: PropTypes.func,
  editable: PropTypes.bool,
};

DatePickerInput.defaultProps = {
  label: '',
  error: false,
  errorMessage: '',
  value: '',
  selectDate: () => {},
  editable: true,
};

export default memo(DatePickerInput);
