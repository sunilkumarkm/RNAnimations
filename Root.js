import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import MainScreen from './src/screens/Main';
import ShareScreen from './src/screens/Share';
import DetailsScreen from './src/screens/Details';
import TrashScreen from './src/screens/Trash';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#B4A608',
        },
        headerTitleStyle: {
          color: '#FFF',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Poke-Gallery',
        }}
      />
      <Stack.Screen name="Share" component={ShareScreen} />
      <Stack.Screen name="Trash" component={TrashScreen} />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        })}
        mode="modal">
        <Stack.Screen name="Home" component={MainStack} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
