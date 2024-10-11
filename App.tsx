import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';
import ChatScreen from './ChatScreen';
import CreateTrip1 from './CreateTrip1'; 
import {
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  ImageBackground,
  View,
} from 'react-native';


const Stack = createStackNavigator();

function App(): React.JSX.Element {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateTrip1">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="CreateTrip1" component={CreateTrip1} />
        {/* Add more screens here */
        
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;