
import {useFonts} from 'expo-font'
import fonts from './src/global/fonts'
import StackNavigator from './src/navigation/StackNavigator'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (<NavigationContainer>
    <BottomTabNavigator />
    </NavigationContainer>
    )
}


// 01:05:05 