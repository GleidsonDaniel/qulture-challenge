import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/FontAwesome';

import {qultureGreen, baseWhite} from '~/helpers/colors';

const ActionButton = ({actions, onPress, icon, color}) => {
  return (
    <FloatingAction
      onPressMain={onPress}
      color={color}
      floatingIcon={<Icon name={icon} size={30} color={baseWhite} />}
      actions={actions}
      showBackground={false}
    />
  );
};

ActionButton.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
  onPress: PropTypes.func,
  icon: PropTypes.string,
  color: PropTypes.string,
};

ActionButton.defaultProps = {
  actions: [],
  onPress: () => {},
  icon: 'pencil',
  color: qultureGreen,
};

export default memo(ActionButton);
