import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Pilot = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
         <Text>Pilot page - click to go home</Text>
      </TouchableOpacity>
   )
}
export default Pilot;
