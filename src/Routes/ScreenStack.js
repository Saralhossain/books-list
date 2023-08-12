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
        headerStyle: { backgroundColor: 'red' },
      }}
    >
      <Stack.Screen 
      name="Home" component={Home} 
      options={{
          headerRight: () => (
            <View style={{height:50}}>
                <Image
                style={{height:40 , width:40}}
                  source={require("../../assets/images/Ellipse1.png")}
                  resizeMode='contain'
                />
            </View>
          ),
          headerLeft: () => (
            <View style={{display:"flex" , alignItems:"center"}}>
                <Text>Hi Nick</Text>
            </View>
          ),
        }}
        />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
}

export default ScreenStack;