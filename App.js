import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer initialRouteName="Main"> 
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}