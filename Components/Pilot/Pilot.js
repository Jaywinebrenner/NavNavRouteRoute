import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


const Pilot = () => {

  return (
    <View style={styles.pilotWrapper}>
        <Text style={styles.pilotText}>Pilot Place</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pilotWrapper: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pilotText: {
    fontSize: 50,
    color: 'firebrick'
  }
});

export default Pilot;
