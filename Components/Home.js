import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToPilot = () => {
      Actions.pilot()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToPilot}>
         <Text>Home page - click to go to pilot</Text>
      </TouchableOpacity>
   )
}
export default Home;
