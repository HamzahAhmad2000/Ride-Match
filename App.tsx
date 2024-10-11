import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';
import ChatScreen from './ChatScreen';
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
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        {/* Add more screens here */
        
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;