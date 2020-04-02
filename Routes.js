import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Components/Home.js';
import Pilot from './Components/Pilot/Pilot.js';
// import Home from './Components/Home.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "pilot" component = {Pilot} title = "Pilot" />
      </Scene>
   </Router>
)
export default Routes;
