import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');
const departIcon = (<Icon name="map-marker" size={16} color="orange" />)
const arriveIcon = (<Icon name="map-marker" size={16} color="aqua" />)

styles = {
  wrapper: {
    // flex: 1,
    padding: 5,
    width: width,
    height: 135,
    justifyContent: 'center', //align children horizontally depending on flexDirection
    alignItems: 'stretch', //align children vertically depending on flexDirection
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  tripTimeContainer: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tripTimeType: {
    padding: 5,
  },
  tripTimeCircle: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 45
  },
  tripInfoContainer: {
    flex: 5,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  departText: {
    color: 'white'
  },
  departTextBold: {
    color: 'white',
    fontWeight: 'bold'
  },
  placeText: {
    flex: 5,
    paddingTop: 15,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'column'
  },
  matchingText: {
    paddingTop: 5,
    color: 'lightgrey',
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  }
};

const TripCard = props => (
  <View style={styles.wrapper}>
    <View style={styles.tripTimeContainer}>
      <View style={styles.tripTimeType}>
        <Text style={{color:'orange'}}>Rider</Text>
      </View>
      <View style={styles.tripTimeCircle}>
        <Text style={styles.departText}>Depart at</Text>
        <Text style={styles.departTextBold}>11:24</Text>
        <Text style={styles.departText}>am</Text>
      </View>
    </View>
    <View style={styles.tripInfoContainer}>
      <View style={styles.placeText}>
        <Text>{departIcon} AU Haymarket, Sydney</Text>
        <Text>{arriveIcon} 37 Pyrmont Bridge Rd, Camperdown</Text>
      </View>
      <Text style={styles.matchingText}>Looking for a match...</Text>
    </View>
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
