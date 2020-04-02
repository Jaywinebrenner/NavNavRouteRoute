import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  const goToPilot = () => {
    Actions.pilot()
  }

  const goToClient = () => {
    Actions.client()
  }

   return (
    <div>
      <p>This is the home page!!!!</p>
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToPilot}>
        <Text>click to go to pilot</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToClient}>
        <Text>click to go to client</Text>
      </TouchableOpacity>
    </div>
   )
}
export default Home;
