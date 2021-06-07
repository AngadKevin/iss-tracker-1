import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native"
import * as React from 'react'
import Home from './screens/home'
import  Meteor from './screens/meteor'
import Tracker from './screens/tracker'
import Update from './screens/update'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tracker" component={Tracker} />
        <Stack.Screen name="Meteor" component={Meteor} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;