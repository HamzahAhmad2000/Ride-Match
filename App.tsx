
import React from 'react';
import SignUp from './SignUp';
import {
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  ImageBackground,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';





function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <SignUp />
  
);
}



export default App;
