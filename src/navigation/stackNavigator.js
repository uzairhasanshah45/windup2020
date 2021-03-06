import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen/StartScreen';
import HomeScreen from '../screens/Home/Home';
import Timer from '../screens/Timer/TImer'
import Goals from "../screens/Goals/Goals";
import Flashback from '../screens/Flashback/Flashback'
import View from '../screens/View/View'
import Fireworks from '../screens/Fireworks/Fireworks'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none"
       screenOptions={{
        headerTitleAlign: 'center',
        ...TransitionPresets.FadeFromBottomAndroid,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        backgroundColor: 'black'
        }}>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialRouteName='Home'
        />
         <Stack.Screen
          name="Timer"
          component={Timer}
        />
        <Stack.Screen
          name="Goals"
          component={Goals}
        />
        <Stack.Screen
          name="Flashback"
          component={Flashback}
        />
        <Stack.Screen
          name="View"
          component={View}
        />
         <Stack.Screen
          name="Fireworks"
          component={Fireworks}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}