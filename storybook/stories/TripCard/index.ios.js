import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

styles = {
  wrapper: {
    // flex: 1,
    padding: 5,
    width: width,
    height: 135,
    justifyContent: 'center', //align children horizontally depending on flexDirection
    alignItems: 'stretch', //align children vertically depending on flexDirection
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  tripTimeContainer: {
    flex: 2,
    backgroundColor: 'green'
  },
  tripInfoContainer: {
    flex: 5,
    backgroundColor: 'red'
  }
};

const TripCard = props => (
  <View style={styles.wrapper}>
    <View style={styles.tripTimeContainer}></View>
    <View style={styles.tripInfoContainer}></View>
  </View>
);

TripCard.propTypes = {
  // children: PropTypes.node.isRequired,
  // onPress: PropTypes.func,
};
TripCard.defaultProps = {
  onPress: () => {},
};

export { TripCard as default };
