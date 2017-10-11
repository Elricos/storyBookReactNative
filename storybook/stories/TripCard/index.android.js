import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

const TripCard = props => (
  <TouchableHighlight onPress={props.onPress}>{props.children}</TouchableHighlight>
);

TripCard.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};
TripCard.defaultProps = {
  onPress: () => {},
};

export { TripCard as default };
