import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button , Image, View , Text } from 'react-native';
import Home from "../Screens/Home/Home";
import Book from "../Screens/Book/Book";

const Stack = createNativeStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'white' ,
        headerShown:false,
      }
      }}
    >
      <Stack.Screen 
      name="Home" component={Home} 
      options={{
          headerShown:false,
          title:"",
          headerStyle: { backgroundColor: "#fff", borderBottomWidth: 0 },
        }}
        />
      <Stack.Screen 
      name="Book" component={Book}
      options={{
        title:""
      }}
      />
    </Stack.Navigator>
  );
}

export default ScreenStack;