import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


const Home = ({navigation}) => {

   return (
    <View style={styles.homeWrapper}>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Pilot', {name: 'Pilot'})}
        >
        <Text style={styles.buttonText}>Pilot</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Client', {name: 'Client'})}
        >
        <Text style={styles.buttonText}>Client</Text>
      </TouchableOpacity>

    </View>
   )
}

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  homeButton: {
    height: 40,
    width: 90,
    backgroundColor: 'firebrick',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white'
  }
});

export default Home;
