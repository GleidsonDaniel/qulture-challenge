import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';

const Loading = ({loading}) => {
  if (!loading) return null;
  return (
    <View style={{alignSelf: 'center', marginVertical: 20}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};

export default memo(Loading);
