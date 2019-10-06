import React from 'react';
import {View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '~/helpers/pixelHandler';

const Card = ({
  children,
  elevation,
  opacity,
  cornerRadius,
  backgroundColor,
  onPress,
}) => {
  const cardStyle = Platform.select({
    ios: () =>
      StyleSheet.create({
        card: {
          shadowRadius: elevation,
          shadowOpacity: opacity,
          shadowOffset: {width: 0, height: elevation},
          borderRadius: cornerRadius,
          backgroundColor,
          width: widthPercentageToDP('46%'),
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    android: () =>
      StyleSheet.create({
        card: {
          elevation,
          borderRadius: cornerRadius,
          backgroundColor,
          width: widthPercentageToDP('46%'),
          height: heightPercentageToDP('28%'),
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
  })();

  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
      <View style={cardStyle.card}>{children}</View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  elevation: PropTypes.number,
  cornerRadius: PropTypes.number,
  opacity: PropTypes.number,
  onPress: PropTypes.func,
  children: PropTypes.element,
};

Card.defaultProps = {
  backgroundColor: '#ffffff',
  elevation: 3,
  cornerRadius: 5,
  opacity: 0.5,
  onPress: () => {},
  children: <View />,
};

export default Card;
