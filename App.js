import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./src/Routes/ScreenStack";

export default function App() {
  console.log("App.js")
  return (
    <NavigationContainer>
        <Route/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
