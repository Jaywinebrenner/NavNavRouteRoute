import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes.js';
import Client from './Components/Client/Client.js'
import {createStackNavigator} from '@react-navigation/stack';
import Pilot from './Components/Pilot/Pilot.js'
import Home from './Components/Home.js'

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      <Stack.Screen
        name="Pilot"
        component={Pilot}
        />
        <Stack.Screen
          name="Client"
          component={Client}
          />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
