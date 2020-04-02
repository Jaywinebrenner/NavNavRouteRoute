import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Pilot = () => {
  
  const goToHome = () => {
    Actions.home()
  }

  return (
    <div>
      <p>This is the pilot page</p>
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
        <Text>click to go home</Text>
      </TouchableOpacity>
    </div>
  )
}

export default Pilot;
